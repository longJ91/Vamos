const express = require('express');
const router = express.Router();
let userApi = require('../api/user_api');
let {wrap, CustomError} = require('../util/error_util');
let commonUtil = require('../util/common_util');

router.post('/login', wrap(async function(req, res){
    let email = req.body.email;
    let pwd = req.body.pwd;
    if(commonUtil.isEmpty(email)|| commonUtil.isEmpty(pwd)){
        throw new CustomError(`No Parameter (email : ${email} / pwd : ${pwd} )`);
    }
    let result = await userApi.login(email, pwd);
    res.status(200).json(result);
}));

router.get('/get_info', wrap(async function(req,res){
    let userId = req.query.id;
    if(commonUtil.isEmpty(userId)) {
        throw new CustomError(`No Parameter (userId : ${userId})`);
    }
    const result = await userApi.getUserInfo(userId);
    res.status(200).json(result);
}));

router.get('/is_duplicate_email', wrap(async function(req, res){
    let email = req.query.email;
    if(commonUtil.isEmpty(email)) {
        throw new CustomError(`No Parameter (email : ${email})`);
    }
    let duplicated = await userApi.isDuplicateEmail(email);
    res.status(200).json(duplicated);
}));

router.post('/sign_in', wrap(async function(req, res){
    let userForm = req.body;
    if(!userApi.validUserInfo(userForm)){
        throw new CustomError(`Invalid Form`);
    }
    let duplicated = await userApi.isDuplicateEmail(userForm.email);
    if(duplicated){
        throw new CustomError(`Duplicate Email address`);
    }
    let id = await userApi.insertUserInfo(userForm);
    res.status(200).json(id);
}));

module.exports = router;