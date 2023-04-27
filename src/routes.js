import { Router } from "express"

import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
import HorariosController from "./app/controllers/HorariosController"
import Servicos from "./app/controllers/Servicos"

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/horarios', HorariosController.store)

routes.post('/servicos', Servicos.store)

export default routes