import Sequelize, { Model } from 'sequelize'


class Horario extends Model {

    static init(sequelize) {
        super.init(

            {
                especialidade: Sequelize.STRING,
                colaboradores: Sequelize.STRING,
                dias: Sequelize.INTEGER,
                inicio: Sequelize.DATE,
                fim: Sequelize.DATE
            },

            {
                sequelize,
            }

        )
    }

}

export default Horario