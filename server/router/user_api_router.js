const express = require('express');
const router = express.Router();
let userApi = require('../api/user_api');
let {wrap, CustomError} = require('../util/error_util');
let commonUtil = require('../util/common_util');

router.post('/login', wrap(async function(req, res){
    let email = req.body.email;
    let pwd = req.body.pwd;
    if(commonUtil.isEmpty(email)|| commonUtil.isEmpty(pwd)){
        throw new CustomError(`No Parameter email, password`, 400);
    }
    let result = await userApi.login(email, pwd);
    res.status(200).json({uid: result});
}));

router.get('/info', wrap(async function(req,res){
    let userId = req.query.id;
    if(commonUtil.isEmpty(userId)) {
        throw new CustomError(`No Parameter userId`, 400);
    }
    const result = await userApi.getUserInfo(userId);
    res.status(200).json(result);
}));

router.get('/duplicate-email', wrap(async function(req, res){
    let email = req.query.email;
    if(commonUtil.isEmpty(email)) {
        throw new CustomError(`No Parameter email`, 400);
    }
    let duplicated = await userApi.isDuplicateEmail(email);
    res.status(200).json({duplicate_email : duplicated});
}));

router.post('/sign-up', wrap(async function(req, res){
    let userForm = req.body;
    let duplicated = await userApi.isDuplicateEmail(userForm.email);
    if(duplicated){
        throw new CustomError(`Duplicate Email address`);
    }
    let id = await userApi.insertUserInfo(userForm);
    res.status(200).json({uid: id});
}));

router.post('/edit-info', wrap(async function(req,res){
    let userForm = req.body;
    await userApi.getUserInfo(userForm.id); //check user
    await userApi.updateUserInfo(userForm);
    res.status(200).json({status : "UPDATE"});
}));

router.post('/widthdrawal', wrap(async function(req, res){
    let id = req.body.id;
    if(commonUtil.isEmpty(id)){
        throw new CustomError(`No Parameter user id`, 400);
    }
    await userApi.deleteUserInfo(id);
    res.status(200).json({status : "SUCCESS"});
}));

router.post('/temp-login', wrap(async function(req, res){
    let name = req.body.name;
    let pwd = req.body.pwd;
    let groupId = req.body.groupId;

    if(commonUtil.isEmpty(name)|| commonUtil.isEmpty(pwd) || commonUtil.isEmpty(groupId)){
        throw new CustomError(`No Parameter name ,pwd, group id`, 400);
    }
    let result = await userApi.tempLogin(groupId, name, pwd);
    res.status(200).json({uid: result});
}));

router.get('/duplicate-temp-name', wrap(async function(req, res){
    let name = req.query.name;
    let groupId = req.query.groupId;
    if(commonUtil.isEmpty(name)|| commonUtil.isEmpty(groupId)) {
        throw new CustomError(`No Parameter name , group id`, 400);
    }
    let duplicated = await userApi.isDuplicateNameInGroup(name, groupId);
    res.status(200).json({status :duplicated});
}));

router.post('/temp-sign-up', wrap(async function(req,res){
    let name = req.body.name;
    let pwd = req.body.pwd;
    let groupId = req.body.groupId;
    if(commonUtil.isEmpty(name)|| commonUtil.isEmpty(pwd) || commonUtil.isEmpty(groupId)){
        throw new CustomError(`No Parameter name ,pwd, group id`, 400);
    }
    let duplicated = await userApi.isDuplicateNameInGroup(name, groupId);
    if(duplicated){
        throw new CustomError(`Duplicate name`);
    }
    let id = await userApi.inserTempUserInfo(groupId, name ,pwd);
    res.status(200).json({uid: id});
}));

router.post('/kakao-login', wrap(async function(req, res){
    let kakaoId = req.body.userId;
    let kakaoNickName = req.body.kakaoName;
    let kakaoEmail = req.body.email;

    let alreadyUserId = await userApi.isDuplicateKakaoId(kakaoId);
    if(alreadyUserId!= -1){
        console.log("kakao login")
        res.status(200).json({uid : alreadyUserId});
    }
    else{
        console.log("kakao sign up")
        let newUserId = await userApi.kakaoSignUp(kakaoId, kakaoNickName, kakaoEmail);
        res.status(200).json({uid: newUserId});
    }
}));

module.exports = router;