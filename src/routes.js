import { Router } from "express"


const routes = new Router()

routes.get('/', async (request, response)=>{
    

    return response.json()

})

export default routes