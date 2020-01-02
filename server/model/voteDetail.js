module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('voteDetail',{
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        groupHostId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        selectedDate : {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        name:{
            type : DataTypes.STRING(100),
            allowNull : false
        }
        // TODO : 만료일 추가
        // expiredTime:{
        //     type: DataTypes.STRING(20),
        //     allowNull: true
        // }
    }, {timestamps : false});
}