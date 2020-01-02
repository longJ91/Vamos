module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('tempUser',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name :{
            type: DataTypes.STRING(20),
            allowNull: false,
            validate:{
                len: [1,20]
            }
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {timestamps : false});
}