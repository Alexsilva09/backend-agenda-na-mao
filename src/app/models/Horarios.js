import Sequelize, { Model } from 'sequelize'


class Horarios extends Model {

    static init(sequelize) {
        super.init({
           
            services_id: Sequelize.INTEGER,
            collaborators_id: Sequelize.INTEGER,
            days: Sequelize.INTEGER,
            start: Sequelize.INTEGER,
            end: Sequelize.INTEGER,
            

        },{
            sequelize,
        }
        )

        return this
    }

    static associate(models){ 

        this.belongsTo(models.Collaborator, {foreignKey: 'collaborators_id', as: 'Collaborator'}),
        this.belongsTo(models.Service, {foreignKey: 'services_id', as: 'service'})

        } 

}

export default Horarios