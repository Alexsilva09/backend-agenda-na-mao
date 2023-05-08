import { Router } from "express"
import authMiddleware from './app/middlewares/auth'

import multer from "multer"
import muterConfig from './config/multer'


import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
import ServiceController from "./app/controllers/ServiceController"
import CollaboratorController from "./app/controllers/CollaboratorController"
import HorariosController from "./app/controllers/HorariosController"


const upload = multer(muterConfig)

const routes = new Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/sessions', SessionController.store)

routes.post('/service', ServiceController.store)
routes.get('/service', ServiceController.index)


routes.post('/collaborator', upload.single('file'), CollaboratorController.store)
routes.get('/collaborator', CollaboratorController.index)

routes.post('/horarios', HorariosController.store)
routes.get('/horarios', HorariosController.index)

routes.use(authMiddleware) 


export default routes