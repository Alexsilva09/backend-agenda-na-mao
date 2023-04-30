import Sequelize, { Model } from 'sequelize'

class Horario extends Model {

    static init(sequelize) {
        super.init(

            {
                dias: Sequelize.INTEGER,
                inicio: Sequelize.DATE,
                fim: Sequelize.DATE
            },

            {
                sequelize,
            }
        )
        return this
    }

    static associate(models){
        this.belongsTo(models.Servico, { foreignKey: 'especialidade_id', as: 'especialidade'})
        this.belongsTo(models.Professionals, { foreignKey: 'colaboradores_id', as: 'colaboradores'})
    }
}

export default Horario