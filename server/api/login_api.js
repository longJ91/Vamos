let {User} = require('../setting/db_connection');

module.exports.get_user_info = async function(userId){
    let user = await User.findOne({where:{id: userId}});
    if(user == null){
        return Promise.reject("NO INFO");
    }
    return Promise.resolve(user);
}

module.exports.login = async function(email, pwd){
    let user = await User.findOne({where:{useremail: email}});
    if(user == null) {
        return Promise.reject("NO USER WITH "+ email);
    }
    if(user.password !== pwd){
        return Promise.reject("WRONG PASSWORD "+ email);
    }
    return Promise.resolve({'id' : user.id});
}