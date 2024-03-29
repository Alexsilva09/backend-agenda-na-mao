import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/User'

class UserController {
   async store(request, response){

    const schema = Yup.object().shape({

        name: Yup.string().required(),
        estabelecimento: Yup.string(),
        tel: Yup.string().required().min(9),
        email: Yup.string().required().email(),
        password: Yup.string().required().min(6),
        admin: Yup.boolean()

    })

    try{

    await schema.validateSync(request.body, {abortEarly: false})

} catch(err){

    return response.status(400).json({error: err.errors})
}
        const {name,estabelecimento, tel, email, password, admin} = request.body

        const userExists = await User.findOne({
            where: { email },
        })

        if(userExists){
            return response.status(409).json({error: 'User aleready exists'})
        }

        const user =  await User.create({
            id: v4(),
            name,
            estabelecimento,
            tel,
            email,
            password,
            admin,
        })

        return response.status(201).json({id: user.name, estabelecimento, email, admin})
    }

    async index(request, response){
        const allUsers = await User.findAll()
        return response.status(200).json(allUsers)
    }
}

export default new UserController()