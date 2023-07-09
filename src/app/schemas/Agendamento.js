/* import mongoose from "mongoose";


const AgendaSchema = new mongoose.Schema({

    user:{
        name:{
            type: String,
            required: true,
        },
        tel:{
            type: String,
            required: true,
        },
    },

    service_id:[
        {
            id:{
                type: Number,
                require: true,
            },
        },
    ],

    collaborator_id:[
        {
            id:{
                type: Number,
                require: true,
            },
        },
    ],

    date:{
        type: Date,
        require: true
    },

    price:{
        type: Number,
        require: true
    },
    
},
{
    timestamps: true
}
)

export default mongoose.model('agendamento', AgendaSchema )  */