import * as Yup from 'yup'
import Agendamento from '../models/Agendamento'
import Service from '../models/Service'
import Collaborator from '../models/Collaborator'
import Horarios from '../models/Horarios'
import { Op, Sequelize,} from 'sequelize'



class AgendamentoController {
    async store(request, response){
        
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            tel: Yup.string().required().min(9),
            services_id: Yup.number().required(),
            collaborators_id: Yup.number().required(),
            date: Yup.date().required(),
            horario_id: Yup.number(),
        })
        try{
            await schema.validateSync(request.body, {abortEarly: false})
         
           }catch(err){
              return response.status(400).json({error: err.errors})
           }

           const {name, tel, services_id, collaborators_id, date, horario_id} = request.body
           
           const agendamento = await Agendamento.create({
                 name,
                 tel,
                 services_id,
                 collaborators_id,
                 date,
                 horario_id
           })
          return response.status(201).json(agendamento)
    }
    
    async index(request,response){
        const allAgendamentos = await Agendamento.findAll({

        /* attributes:[
            'id', [Sequelize.fn("to_char", Sequelize.col('date'), "DD/MM/YYYY HH:mm"), 'date',],'name', 'tel',
          ], */

          attributes: ['id','name','tel','date',],
        include:[
            {
            model: Service,
            as: 'service',
            attributes: ['name','price', 'time'],
        },
        {
            model: Collaborator,
            as: 'Collaborator',
            attributes: ['name'],
        },

        {
            model: Horarios,
            as: 'horario',
            attributes: ['days'],
        },
        
         ],
         
        })

        return response.status(200).json(allAgendamentos)
}
}

export default new AgendamentoController() 
