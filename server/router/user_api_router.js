const express = require('express');
const router = express.Router();
let userApi = require('../api/user_api');
let {wrap} = require('../api/common_util');

router.post('/login', wrap(async function(req, res){
    console.log(req.body);
    let email = req.body.email;
    let pwd = req.body.pwd;
    if(email == null || pwd == null){
        throw Error(`No Parameter (email : ${email} / pwd : ${pwd} )`);
    }
    let result = await userApi.login(email, pwd);
    res.status(200).json(result);
}));

router.get('/get_info', wrap(async function(req,res){
    let userId = req.query.id;
    if(userId == null) {
        throw Error(`No Parameter (userId : ${userId})`);
    }
    const result = await userApi.getUserInfo(userId);
    res.status(200).json(result);
}));


// router.post('/sign_in', function(req, res){
//     let email = req.body.email;
//     let pwd = req.body.pwd;
//     let name = req.body.name;
//     let phone = req.body.phone;
//     let birth = req.body.birth;

//     if(!loginApi.validUserInfo(email,pwd, name, phone, birth)){
//         res.status(400).send("Invalid Form");
//         return; 
//     }
    
// });

module.exports = router;