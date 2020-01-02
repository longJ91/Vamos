module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('group',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : DataTypes.STRING(100),
            allowNull : false
        },
        descript: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        groupHostId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        groupDates : { // 모임 후보 날짜
            type: DataTypes.STRING(20),
            allowNull: false
        },
        groupMemberN :{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        voteMemberN :{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        voteCreatedDate:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        voteEndDate:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        voteFixedDate:{
            type: DataTypes.STRING(20),
            allowNull: true
        },
        voteURL:{
            type: DataTypes.STRING(20),
            allowNull: false
        }
        // TODO : 만료일 추가
        // expiredTime:{
        //     type: DataTypes.STRING(20),
        //     allowNull: true
        // }
    }, {timestamps : false},
    {
        validate: {
            voteEndDateAfterNow() {
            if (this.voteEndDate.isAfter(this.voteCreatedDate)) {
              throw new Error('voteEndDate date must be after now.');
            }
          }
        }
      });
}