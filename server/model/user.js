module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user',{
        useremail:{
            type : DataTypes.STRING(20),
            allowNull : false,
            unique : true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        name :{
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {timestamps : false});
}