import { Router } from "express"

import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
import HorariosController from "./app/controllers/HorariosController"
import Servicos from "./app/controllers/ServicosController"
import ProfessionalsController from "./app/controllers/ProfessionalsController"
const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/horarios', HorariosController.store)
routes.get('/horarios', HorariosController.index)

routes.post('/servicos', Servicos.store)

routes.get('/servicos', Servicos.index)

routes.post('/professionals', ProfessionalsController.store)

routes.get('/professionals', ProfessionalsController.index)

export default routes