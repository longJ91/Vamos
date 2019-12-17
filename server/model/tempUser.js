module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('tempUser',{
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name :{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {timestamps : false});
}