import * as Yup from 'yup'
import Horarios from '../models/Horarios'
import Service from '../models/Service'
import Collaborator from '../models/Collaborator'
import { Sequelize} from 'sequelize'

class HorariosController {

 async store(request, response){

    const schema = Yup.object().shape({
        services_id: Yup.number().required(),
        collaborators_id: Yup.number().required(),
        days: Yup.string().required(),
        start: Yup.date().required(),
        end: Yup.date().required(),
    })

    try{
        await schema.validateSync(request.body, {abortEarly: false})

       }catch(err){
        return response.status(400).json({error: err.errors})
       }

       const { services_id, collaborators_id, days, start, end} = request.body

       const horarios = await Horarios.create({

        services_id,
        collaborators_id,
        days,
        start,
        end,
        

       })

       return response.status(201).json(horarios)
 }

        async index(request,response){
        const allHorarios = await Horarios.findAll({
            
          /*   attributes: [ 

                [Sequelize.fn("to_char", Sequelize.col('start'), "DD/MM/YYYY HH:mm"), 'start'], 
                [Sequelize.fn("to_char", Sequelize.col('end'), "DD/MM/YYYY HH:mm"), 'end'],'days'
            ], */

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
        return response.status(200).json(allHorarios)
}

}

export default new HorariosController()