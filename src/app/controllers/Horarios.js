import * as Yup from 'yup'

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

        return response.json({ok: true})

    }

}


export default new Horarios()