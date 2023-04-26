import { Router } from "express"

import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
import Horarios from "./app/controllers/Horarios"

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/horarios', Horarios.store)

export default routes