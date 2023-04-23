import { Router } from "express"
import {v4} from 'uuid'

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response)=>{
    
    const user = await User.create({
        id: v4(),
        name: 'Alex',
        estabelecimento: 'alex cortes',
        cod: '55',
        tel: '94308921',
        email: 'alexcds2021@live.com',
        password_hash: '123',

    })
    return response.json(user)
})

export default routes