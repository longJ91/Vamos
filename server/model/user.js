module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user',{
        email:{
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
            allowNull: true,
            validate: {
                is: /^[0-9]{3}[-]+[0-9]{3,4}[-]+[0-9]{4}$/
            }
        },
        kakaoId:{
            type: DataTypes.STRING(20),
            allowNull: true
        }
    }, {timestamps : false});
}