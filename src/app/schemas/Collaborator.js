import mongoose from "mongoose";

const CollaboratorSchema = new mongoose.Schema({

        name:{
            type: String,
            required: true,
        },

        tel:{
            type: String,
            required: true,
        },

        patch:{
            type: String,
        },

        password:{
            type: String,
            required: true,
        }
    },
{
    timestamps: true
}
)

export default mongoose.model('collaborator', CollaboratorSchema ) 