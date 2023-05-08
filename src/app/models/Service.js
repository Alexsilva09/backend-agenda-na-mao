import Sequelize, { Model } from 'sequelize'


class Service extends Model {

    static init(sequelize) {
        super.init({
            
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            time: Sequelize.INTEGER,

        },{
            sequelize,
        }
        )

        return this
    }

   

}

export default Service