import Sequelize, { Model } from 'sequelize'

class Servico extends Model {

    static init(sequelize){
        super.init(
            {

                name: Sequelize.STRING,
                price: Sequelize.INTEGER,
                time: Sequelize.INTEGER,
           },
        
           {
             sequelize,
           }


        )
    }

}

export default Servico