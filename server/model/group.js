module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('group',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : DataTypes.STRING(100),
            allowNull : false,
            comment : "name of this group"
        },
        descript: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            comment : "description of this group"
        },
        groupHostId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment : "group host's ID who created this group"
        },
        groupDates : {
            type: DataTypes.STRING(5000),
            allowNull: false,
            comment : "the meeting candidate dates of the vote"
        },
        groupMemberN :{
            type: DataTypes.INTEGER,
            allowNull: false,
            comment : "the number of members who vote"
        },
        voteMemberN :{
            type: DataTypes.INTEGER,
            allowNull: false,
            comment : "the number of members who voted"
        },
        voteCreatedDate:{
            type: DataTypes.DATE(),
            allowNull: false,
            comment : "the date when create this group"
        },
        voteEndDate:{
            type: DataTypes.DATE(),
            allowNull: false,
            comment : "this vote will closed voteEndDate that made by host"
        },
        voteFixedDate:{
            type: DataTypes.DATE(),
            allowNull: true,
            comment : "the result of vote"
        },
        voteURL:{
            type: DataTypes.STRING(1000),
            allowNull: false,
            comment : "voters can access through this url"
        }
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