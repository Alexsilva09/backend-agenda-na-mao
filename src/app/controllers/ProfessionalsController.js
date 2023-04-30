import * as Yup from 'yup'

import Professionals from '../models/Professionals'

class Professional {
    
    async store(request, response){

        const schema = Yup.object().shape({

            name: Yup.string().required(),
            tel: Yup.string().required().min(9),
            password_hash: Yup.string().required().min(6),
        })

        try{
            await schema.validateSync(request.body, {abortEarly: false})
        } catch(err){
            return response.status(400).json({error: err.errors})
        }

        const {name, tel, password_hash} = request.body

        const professionalExists = await Professionals.findOne({
            where:{
                name,
            }
        })

        if(professionalExists){

            return response.status(400).json({error: "Profissional já existe."})
        }


        const newProfessional = await Professionals.create({
            name,
            tel,
            password_hash,
        })

        return response.status(201).json({
            name: newProfessional.name, 
            tel: newProfessional.tel, 
            password_hash: newProfessional.password_hash
        })
    }

    async index(request, response){
        const allProfessionals = await Professionals.findAll()
        return response.json(allProfessionals)
    }


}

export default new Professional()