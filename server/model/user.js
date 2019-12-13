module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user',{
        userEmail:{
            type : DataTypes.STRING(100),
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
        },
        birthDay : {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        phoneNumber:{
            type: DataTypes.STRING(20),
            allowNull: true
        }
    }, {timestamps : false});
}