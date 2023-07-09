
import Agendamento from '../models/Agendamento'
import { Op, Sequelize,} from 'sequelize'
import * as Yup from 'yup'
import Service from '../models/Service'
import Collaborator from '../models/Collaborator'


class AgendaFilterController {

   
  async filter(request, response){

  const schema = Yup.object().shape({
      dateInicio: Yup.date().required(),
      dateFim: Yup.date().required(),
  })

  try{
      await schema.validateSync(request.body, {abortEarly: false})
   
     }catch(err){
        return response.status(400).json({error: err.errors})
     }

     const { dateInicio, dateFim } = request.body

     const filterAgenda = await Agendamento.findAll({

      attributes: [
        [Sequelize.fn("to_char", Sequelize.col('date'), "DD/MM/YYYY"), 'date',],'name', 'tel',
      ],

      where: {
        date:{
          [Op.gte]: new Date(dateInicio),
          [Op.lte]: new Date(dateFim),
        }, 
      },

      include:[
        {
        model: Service,
        as: 'service',
        attributes: ['name','price'],
    },
    {
        model: Collaborator,
        as: 'Collaborator',
        attributes: ['name'],
    },
    
     ],
     
     })


   /* const agenda = await Agendamento.findAll({

      attributes:[
        [Sequelize.fn("to_char", Sequelize.col('date'), "DD/MM/YYYY HH:mm"), 'date',], 'name', 'tel',
      ],

    }) */

    return response.json(filterAgenda) 

  }
}

export default new AgendaFilterController() 