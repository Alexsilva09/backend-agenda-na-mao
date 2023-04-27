import * as Yup from 'yup'

import Horario from '../models/Horario'

class Horarios {

    async store(request,response){

        const schema = Yup.object().shape({

            especialidade: Yup.string().required(),
            colaboradores: Yup.string().required(),
            dias: Yup.number().required(),
            inicio: Yup.date().required(),
            fim: Yup.date().required(),
            
        })

        try{
            await schema.validateSync(request.body, {abortEarly: false})
        } catch(err){
            return response.status(400).json({error: err.errors})
        }

        const { especialidade, colaboradores, dias, inicio, fim } = request.body

        const newHorario = await Horario.create({
            
            especialidade,
            colaboradores,
            dias,
            inicio,
            fim
        })




        return response.json(newHorario)

    }

}


export default new Horarios()