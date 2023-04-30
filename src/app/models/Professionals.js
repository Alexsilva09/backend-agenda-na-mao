import Sequelize, { Model } from 'sequelize'

class Professionals extends Model {

    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                tel: Sequelize.STRING,
                password_hash: Sequelize.INTEGER,
           },
        
           {
             sequelize,
           }
        )

        return this
    }

}

export default Professionals