import Sequelize, { Model } from 'sequelize'


class Service extends Model {

    static init(sequelize) {
        super.init({
            
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            time: Sequelize.DATE,

        },{
            sequelize,
        }
        )

        return this
    }

   

}

export default Service