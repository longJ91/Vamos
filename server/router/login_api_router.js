const express = require('express');
const router = express.Router();
let loginApi = require('../api/login_api');

/**
    * @swagger
    *  /login:
    *    get:
    *      tags:
    *      - login API
    *      description: login
    *      produces:
    *      - applicaion/json
    *      parameters:
    *      - name: email
    *        in: query
    *        description: "user email"
    *        required: true
    *        type: string
    *        x-example: abc@naver.com
    *      - name: pwd
    *        in: query
    *        description: "user password"
    *        required: true
    *        type: string
    *        x-example: 123
    *      responses:
    *       200:
    *        description: login success return json
    *        schema:
    *          type: object
    *          properties :
    *              id:
    *                type: integer
    */

router.get('', function(req, res){
    let email = req.query.email;
    let pwd = req.query.pwd;
    if(email == null || pwd == null){
        res.status(400).send("NO PARAM");
        return; 
    }
    loginApi.login(email, pwd)
        .then(result =>{
            res.status(200).json(result);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send(err);
        });
});

/**
    * @swagger
    *  /login/get_user_info:
    *    get:
    *      tags:
    *      - login API
    *      description: id 에 해당하는 유저의 정보를 출력한다.
    *      produces:
    *      - applicaion/json
    *      parameters:
    *      - name: id
    *        in: query
    *        description: "user id"
    *        required: true
    *        type: integer
    *        x-example: 1
    *      responses:
    *       200:
    *        description: selected user info by id
    *        schema:
    *          type: array
    *          items:
    *           $ref: '#/definitions/user'
    */
router.get('/get_user_info', function(req,res){
    let userId = req.query.id;
    if(userId == null) {
        res.status(400).send("NO PARAM");
        return; 
    }
    loginApi.getUserInfo(userId)
        .then(result=>{
            res.status(200).json(result);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send(err);
        });
});


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