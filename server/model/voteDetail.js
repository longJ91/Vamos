module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('voteDetail',{
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        voterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment : "Id fo voter"
        },
        userType : {
            type : DataTypes.STRING(2),
            allowNull : false,
            comment : "user's type, T (tempUser) or U (User)"
        },
        selectedDate : {
            type: DataTypes.STRING(20),
            allowNull: true,
            comment : "the date when voter selected"
        },
        name:{
            type : DataTypes.STRING(100),
            allowNull : false,
            comment : "the name of voter"
        }
    }, {timestamps : false});
}