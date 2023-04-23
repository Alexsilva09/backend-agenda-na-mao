import Sequelize, { Model } from 'sequelize'

class User extends Model {

    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            estabelecimento: Sequelize.STRING,
            cod: Sequelize.STRING,
            tel: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,

        },{
            sequelize,
        }
        )
    }


}

export default User