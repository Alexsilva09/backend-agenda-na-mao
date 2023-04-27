import * as Yup from 'yup'

import Servico from '../models/Servicos'

class Servicos {


    async store(request,response){

        const schema = Yup.object().shape({

            name: Yup.string().required(),
            price: Yup.number().required(),
            time: Yup.number().required(),

            
        })

        try{
            await schema.validateSync(request.body, {abortEarly: false})
        } catch(err){
            return response.status(400).json({error: err.errors})
        }

        const { name, price, time } = request.body

        const servico = await Servico.create({
            name,
            price,
            time
        })
        return response.json(servico)

}

}

export default new Servicos()