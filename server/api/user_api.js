let {User} = require('../setting/db_connection');
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
    let user = await User.findOne({where:{userEmail: email}});
    if(commonUtil.isEmpty(user)){
        throw new CustomError(`No user with ${email}`);
    }
    if(user.password !== pwd){
        throw new CustomError(`Incorrect password`);
    }
    return user.id;
}

module.exports.isDuplicateEmail = async function(email){
    let user = await User.findOne({where:{userEmail: email}});
    if(commonUtil.isEmpty(user)){
        return false;
    }
    return true;
}

module.exports.validUserInfo = function(userForm){
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneFormat = /^[0-9]{3}[-]+[0-9]{3,4}[-]+[0-9]{4}$/;
    const birthFormat = /^[0-9]{6}/;
    const nameFormat = /^[^0-9]*/;
    const PWD_MAX_LENGTH =5;

    if(commonUtil.isEmpty(userForm.email)|| !userForm.email.match(mailFormat)){
        return false;
    }
    if(commonUtil.isEmpty(userForm.pwd)|| !userForm.pwd.length > PWD_MAX_LENGTH ){
        return false;
    }
    if(commonUtil.isEmpty(userForm.name) || !userForm.name.match(nameFormat)){
        return false;
    }
    if(!commonUtil.isEmpty(userForm.phone) && !userForm.phone.match(phoneFormat)){
        return false;
    }
    if(!commonUtil.isEmpty(userForm.birth) && !userForm.birth.match(birthFormat)){
        return false;
    }
    return true;
}

module.exports.insertUserInfo = async function(userForm){
    let result = await User.create({
                    userEmail : userForm.email,
                    password : userForm.pwd,
                    name : userForm.name,
                    birthDay : userForm.birth,
                    phoneNumber : userForm.phone
                });
                
    return result.id;
}