let {User} = require('../setting/db_connection');

module.exports.getUserInfo = async function(userId){
    let user = await User.findOne({where:{id: userId}});
    if(user == null){
        throw Error(`No user with ${userId}`);
    }
    return user;
}

module.exports.login = async function(email, pwd){
    let user = await User.findOne({where:{userEmail: email}});
    if(user == null){
        throw Error(`No user with ${email}`);
    }
    if(user.password !== pwd){
        throw Error(`Incorrect password`);
    }
    return user.id;
}

module.exports.validUserInfo = function(email,pwd, name, phone, birth){
    return true;
}

module.exports.insertUserInfo = function(){


}