let {User} = require('../setting/db_connection');

module.exports.getUserInfo = async function(userId){
    let user = await User.findOne({where:{id: userId}});
    if(user == null){
        return Promise.reject("NO INFO");
    }
    return Promise.resolve(user);
}

module.exports.login = async function(email, pwd){
    let user = await User.findOne({where:{userEmail: email}});
    if(user == null) {
        return Promise.reject("NO USER WITH "+ email);
    }
    if(user.password !== pwd){
        return Promise.reject("WRONG PASSWORD "+ email);
    }
    return Promise.resolve({'id' : user.id});
}

module.exports.validUserInfo = function(email,pwd, name, phone, birth){
    return true;
}

module.exports.insertUserInfo = function(){


}