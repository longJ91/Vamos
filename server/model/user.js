module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type : DataTypes.STRING(100),
            allowNull : false,
            unique : true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate:{
                len : [5,100]
            }
        },
        name :{
            type: DataTypes.STRING(20),
            allowNull: false,
            validate:{
                len: [1,20]
            }
        },
        birthDay : {
            type: DataTypes.STRING(20),
            allowNull: true,
            validate: {
                is: /^[0-9]{6}$/
            }
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