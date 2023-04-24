import { v4 } from 'uuid'

import User from '../models/User'

class UserController {
   async store(request, response){

        const {name,estabelecimento, cod, tel, email, password_hash, admin} = request.body

        
        const user =  await User.create({
            id: v4(),
            name,
            estabelecimento,
            cod,
            tel,
            email,
            password_hash,
            admin,
        })

        return response.status(201).json(user)
    }
}

export default new UserController()