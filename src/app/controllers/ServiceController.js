import * as Yup from 'yup'

import Service from '../models/Service'
import { Sequelize } from 'sequelize'

class ServiceController{

    async store(request, response){

        const schema = Yup.object().shape({

            name: Yup.string().required(),
            price: Yup.number().required(),
            time: Yup.date().required()

        }) 

        try{

         await schema.validateSync(request.body, {abortEarly: false})
    
        }catch(err){
    
         return response.status(400).json({error: err.errors})
        }

        const {name, price, time} = request.body
    
        const existService = await Service.findOne({
            where:{
                name,
            }
        })

        if(existService){
            return response.json({error: 'Serviço já cadastrado'})
        }

        const service = await Service.create({

         name,
         price,
         time,
        })

        return response.status(201).json({id: service.id, name, price, time}) 

    }

    async index(request,response){
        const allService = await Service.findAll({

            attributes: [ 'id', 'name', 'price','time']

             /* attributes:[
                [Sequelize.fn("to_char", Sequelize.col('time'), "HH:mm"), 'time',], 'name', 'price', 'id'
              ],  */


        })
        return response.status(200).json(allService)
    }
}

export default new ServiceController()