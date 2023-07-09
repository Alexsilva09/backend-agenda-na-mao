
import Sequelize, { Model } from 'sequelize'


class Agendamentos extends Model {
    static init(sequelize) {
        super.init({
            
            name: Sequelize.STRING,
            tel: Sequelize.STRING,
            services_id: Sequelize.INTEGER,
            collaborators_id: Sequelize.INTEGER,
            date: Sequelize.DATE,
            horario_id: Sequelize.INTEGER,
            
        },{
            sequelize,
        }
        )
        return this
    }
    static associate(models){ 
        this.belongsTo(models.Collaborator, {foreignKey: 'collaborators_id', as: 'Collaborator'}),
        this.belongsTo(models.Service, {foreignKey: 'services_id', as: 'service'})
         this.belongsTo(models.Horarios, {foreignKey: 'horario_id', as: 'horario'}) 
        } 
}
export default Agendamentos
