import  Sequelize  from "sequelize"

//import mongoose from "mongoose"

import User from '../app/models/User'
import configDataBase from '../config/database'
import Service from "../app/models/Service"
import Collaborator from '../app/models/Collaborator'
import Horarios from "../app/models/Horarios"
import Agendamento from "../app/models/Agendamento"



const models = [User, Service, Collaborator, Horarios, Agendamento]

class Database {
    constructor(){
        this.init()
        //this.mongo()
    }

    init(){
        this.connection = new Sequelize(configDataBase)
        models.map((model)=> model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }

    

    /*  mongo(){
        this.mongoConnection = mongoose.connect(

            'mongodb://localhost:27017/agendanamao',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
            
            )
    } */ 
}

export default new Database()