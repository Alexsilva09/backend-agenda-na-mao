import  Sequelize from "sequelize"

import User from '../app/models/User'
import configDataBase from '../config/database'
import Service from "../app/models/Service"
import Collaborator from '../app/models/Collaborator'
import Horarios from "../app/models/Horarios"


const models = [User, Service, Collaborator, Horarios]

class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(configDataBase)
        models.map((model)=> model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database()