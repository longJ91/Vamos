let {User, TempUser} = require('../setting/db_connection');
let {CustomError} = require('../util/error_util');
let commonUtil = require('../util/common_util');

module.exports.getUserInfo = async function(userId){
    let user = await User.findOne({where:{id: userId}});
    if(commonUtil.isEmpty(user)){
        throw new CustomError(`No user with ${userId}`);
    }
    return user;
}

module.exports.login = async function(email, pwd){
    let user = await User.findOne({where:{email: email}});
    if(commonUtil.isEmpty(user)){
        throw new CustomError(`No user with ${email}`);
    }
    if(user.password !== pwd){
        throw new CustomError(`Incorrect password`);
    }
    return user.id;
}

module.exports.isDuplicateEmail = async function(email){
    let user = await User.findOne({where:{email: email}});
    if(commonUtil.isEmpty(user)){
        return false;
    }
    return true;
}

module.exports.insertUserInfo = async function(userForm){
    let result = await User.create({
                    email : userForm.email,
                    password : userForm.pwd,
                    name : userForm.name,
                    birthDay : userForm.birth,
                    phoneNumber : userForm.phone
                });     
    return result.id;
}

module.exports.updateUserInfo = async function(userForm){
    let affectRow = await User.update({
                    email : userForm.email,
                    password : userForm.pwd,
                    name : userForm.name,
                    birthDay : userForm.birth,
                    phoneNumber : userForm.phone
                }, {where : {id : userForm.id}});
    if(affectRow) return true;
    throw new CustomError(`Fail to update user Info`);
}

module.exports.deleteUserInfo = async function(userId){
    let removedRow = await User.destroy({where: {id: userId}});
    if(removedRow) return true;
    throw new CustomError(`Fail to delete user`);
}

module.exports.tempLogin = async function(groupId, name ,pwd){
    let tempUser = await TempUser.findOne({where:{groupId: groupId, name: name}});
    if(commonUtil.isEmpty(tempUser)){
        throw new CustomError(`No temp user at Group ${groupId}`);
    }
    if(tempUser.password !== pwd){
        throw new CustomError(`Incorrect password`);
    }
    return tempUser.id;
}

module.exports.isDuplicateNameInGroup = async function(name, groupId){
    let user = await TempUser.findOne({where:{name: name , groupId : groupId}});
    if(commonUtil.isEmpty(user)){
        return false;
    }
    return true;
}

module.exports.inserTempUserInfo = async function(groupId, name ,pwd){
    let result = await TempUser.create({
        groupId : groupId,
        name : name,
        password : pwd
    });     
    return result.id;
}