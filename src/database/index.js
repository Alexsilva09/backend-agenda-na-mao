import  Sequelize from "sequelize"

import User from '../app/models/User'


import configDataBase from '../config/database'
import Horario from "../app/models/Horario"

const models = [User, Horario]

class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(configDataBase)
        models.map((model)=> model.init(this.connection))
    }
}

export default new Database()