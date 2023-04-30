import * as Yup from 'yup'
import Servicos from '../models/Servicos'
import Professionals from '../models/Professionals'

import Horario from '../models/Horario'

class Horarios {

    async store(request,response){

        const schema = Yup.object().shape({

            especialidade_id: Yup.number().required(),
            colaboradores_id: Yup.number().required(),
            dias: Yup.number().required(),
            inicio: Yup.date().required(),
            fim: Yup.date().required(),
            
        })

        try{
            await schema.validateSync(request.body, {abortEarly: false})
        } catch(err){
            return response.status(400).json({error: err.errors})
        }

        const { especialidade_id, colaboradores_id, dias, inicio, fim } = request.body

        const horarioExists = await Horario.findOne({
            where:{
                especialidade_id,
            }
        })

        if(horarioExists){

            return response.status(400).json({error: " id já existe."})
        }

        const newHorario = await Horario.create({
            
            especialidade_id,
            colaboradores_id,
            dias,
            inicio,
            fim
        })

        return response.status(201).json(newHorario)

    }
    async index(request, response){
        const allHorarios = await Horario.findAll({
        include: [ 
            { model: Servicos,
             as: 'especialidade', 
             attributes: ['id', 'name'] 
            }],
        })
        return response.json(allHorarios)
    }

}


export default new Horarios()