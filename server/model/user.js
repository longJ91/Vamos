module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user',{
        //email 길이가 너무 짧음
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
            allowNull: false
        }
    }, {timestamps : false});
}

/**
    * @swagger
    * definitions:
    *  user:
    *   type: object
    *   required:
    *     - userEmail
    *     - password
    *     - name
    *     - phoneNumber
    *   properties:
    *     id:
    *       type: integer
    *       description: ObjectId
    *     userEmail:
    *       type: string
    *       description: 유저계정
    *     password:
    *       type: string
    *       description: 비밀번호
    *     name:
    *       type: string
    *       description: 유저이름
    *     birthDay:
    *       type: string
    *       description: 생년월일
    *     phoneNumber:
    *       type: string
    *       description: 핸드폰 번호
    */