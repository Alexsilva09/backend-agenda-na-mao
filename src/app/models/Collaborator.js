import Sequelize, { Model } from 'sequelize'


class Collaborator extends Model {

    static init(sequelize) {
        super.init({
            
            path: Sequelize.STRING,
            name: Sequelize.STRING,
            tel: Sequelize.STRING,
            moderator: Sequelize.BOOLEAN,
            password: Sequelize.STRING,
            url:{
                type: Sequelize.VIRTUAL,
                get(){
                    return `http://localhost:3000/collaborator-file/${this.path}`
                },
            },
            
        },{
            sequelize,
        }
        )

        return this
    }

}

export default Collaborator