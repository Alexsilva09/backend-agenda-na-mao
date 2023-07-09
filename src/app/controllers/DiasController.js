import * as Yup from 'yup'
import Service from '../models/Service'
import { Op, Sequelize, col,} from 'sequelize'
import moment from 'moment'
import util from '../../config/util'
import Horarios from '../models/Horarios'
import Agendamentos from '../models/Agendamento'
import Collaborator from '../models/Collaborator'
import _ from 'lodash'



class DiasController{

    async filter(request, response){
     const schema = Yup.object().shape({
        date: Yup.string(),
        service_id: Yup.number().required(),
        
     })

     try{

      await schema.validateSync(request.body, {abortEarly: false})

      const { date, service_id,} = request.body

      let lastDay = moment(date) 
      let agenda = []
      let colaboradores = []
      
      const service = await Service.findByPk(service_id)
      const horarios = await Horarios.findAll({
      attributes: ['days','services_id','collaborators_id', 'start', 'end',],
       })
 
     
       const servicoMinutos = util.hourToMinutes(moment(service.time).format('HH:mm'))
 
       const servicosSlots = util.sliceMinutes(
          service.time,
          moment(service.time).add(servicoMinutos, 'minutes'),
          util.SLOT_DURATION
       ).length
 
 
         for(let i = 0; i <= 365 && agenda.length < 7; i++ ){
          const diasDisponiveis = horarios.filter((horario) =>{
            
          const diaSemanaDisponivel = horario.days.includes(moment(lastDay).day());
 
          const servicoDisponivel = horario.services_id === service_id

          return diaSemanaDisponivel && servicoDisponivel
 
          })
          
          
         
          if(diasDisponiveis.length > 0 ){

            let todosHorariosDia = {}

            for( let spaco of diasDisponiveis){

               for(let colaboradorId of [spaco.collaborators_id]){
               
               if(!todosHorariosDia[colaboradorId]){
                  todosHorariosDia[colaboradorId] = []
               }

                 todosHorariosDia[colaboradorId] = [
                  ...todosHorariosDia[colaboradorId],
                  ...util.sliceMinutes(
                     util.margeDateTime(lastDay, spaco.start),
                     util.margeDateTime(lastDay, spaco.end),
                     util.SLOT_DURATION
                  )
               ]
            }  
            }
            
            // VERIFICAR A OCUPAÇÃO DE CADA COLABORADOR NO DIA

            for(let colaboradorId of Object.keys(todosHorariosDia)){
               //recuperar agendamento
               
         
               const agendamentos = await Agendamentos.findAll({
                  colaboradorId,
                  
                  where:{
                  date:{
                     [Op.gte]:  moment(lastDay).startOf('day'),
                     [Op.lte]:  moment(lastDay).endOf('day')
                  }},  
                 
                  attributes:['date'],
                  
                  include:{
                     model: Service,
                     as: 'service',
                     attributes: ['time']
                  } 
               })
               

               //recuperar horarios agendados

               let horariosOcupados = agendamentos.map((agendamento) => ({

                  start: moment(agendamento.date),
                  end: moment(agendamento.date).add(util.hourToMinutes(
                         moment(agendamento.service.time).format('HH:mm')
                     ),
                     'minutes'
                     )
               }))  
               

               //recuperar todos os slots entre os agendamentos

               horariosOcupados = horariosOcupados.map((horario) =>
                util.sliceMinutes(horario.start, horario.end, util.SLOT_DURATION
                  )
                ).flat();

                
                //removendo todos os horarios/ slots ocupados

                let horariosLivres = util.splitByValue(todosHorariosDia[colaboradorId].map(horarioLivre => {
                  return horariosOcupados.includes(horarioLivre) ? '-' : horarioLivre
                }),'-').filter(space => space.length > 0)


                //verificando se existe espaço suficiente no slot

                horariosLivres = horariosLivres.filter(horarios => horarios.length >= servicosSlots )

                // verificando se os horarios dentro do slot tem a continuidade necessária

                horariosLivres = horariosLivres.map((slot) => slot.filter((horario, index) => slot.length - index >= servicosSlots)).flat();
         
                //formatando horarios de dois em dois essse chunk
                horariosLivres = _.chunk(horariosLivres, 2)

                //remover colaborador caso não tenha nenhum espaço

                if(horariosLivres.length === 0){
                  todosHorariosDia = _.omit(todosHorariosDia, colaboradorId)
                }else{
                  todosHorariosDia[colaboradorId] = horariosLivres
                }

         
            }

            //verificar se tem colaborador disponivel no dia 
            const totalColaborador = Object.keys(todosHorariosDia).length;
           
               if(totalColaborador > 0){

                  colaboradores.push(Object.keys(todosHorariosDia))
               
                  agenda.push({
                     [lastDay.format('YYYY-MM-DD')] : todosHorariosDia
                  })
               }


          }
          
          lastDay = lastDay.add(1, 'day')
       }  
       //recuperando dados dos colaboradores 
       colaboradores = _.uniq(colaboradores.flat())

        colaboradores = await Collaborator.findAll({
        
         _id: {$in:colaboradores },
      

         attributes:['name']
       }) 
       
       colaboradores = colaboradores.map(c => ({
         ...c._doc,
         name: c.name.split()[0]
       })) 

       return response.status(200).json({
          /* servicoMinutos,
          minutos: moment(service.time).format('HH:mm'),
         servicosSlots */
         colaboradores,
         agenda
        
       })
 
   
     }catch(err){
        return response.status(400).json({error: err.errors})
     }

    }

}

export default new DiasController()