import * as Yup from 'yup'

import Collaborator from '../models/Collaborator'

class CollaboratorController{

    async store(request, response){
     const schema = Yup.object().shape({
        name: Yup.string().required(),
        tel: Yup.string().required().min(9),
        moderator: Yup.boolean().required(),
        password: Yup.string().required().min(6),
     })

     try{

      await schema.validateSync(request.body, {abortEarly: false})
   
     }catch(err){
        return response.status(400).json({error: err.errors})
     }

     const { name, tel, moderator, password} = request.body
     const {filename: path} = request.file

     const collaborator = await Collaborator.create({
        name,
        tel,
        moderator,
        password,
        path,
     })
     return response.status(201).json({name: collaborator.name,tel,moderator,password,path})
    }

    async index(request,response){
      const allCollaborator = await Collaborator.findAll()
      return response.status(200).json(allCollaborator)
  }

}

export default new CollaboratorController()