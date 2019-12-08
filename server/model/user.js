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

/**
    * @swagger
    * definitions:
    *  user:
    *   type: object
    *   required:
    *     - useremail
    *     - password
    *     - name
    *   properties:
    *     id:
    *       type: integer
    *       description: ObjectId
    *     useremail:
    *       type: string
    *       description: 유저계정
    *     password:
    *       type: string
    *       description: 비밀번호
    *     name:
    *       type: string
    *       description: 유저이름
    */