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
    //query면 url에 정보 유출 되니까 body로 encoding 해서 하는거 맞춰서 바꿔야 할듯
    let email = req.query.email;
    let pwd = req.query.pwd;
    if(email == null || pwd == null){
        res.status(400).send("NO PARAM");
        return; 
    }
    loginApi.login(email, pwd)
        .then(result =>{
            // cros origin 문제 해결 방법
            // 추가적으로 미들웨어에 추가 해야함 (front와 host 맞추긴 해야함)
            // 참고 해결 방법 : https://velog.io/@wlsdud2194/cors
            // 참고 Cros origin problem 이해 : https://homoefficio.github.io/2015/07/21/Cross-Origin-Resource-Sharing/
            res.header("Access-Control-Allow-Origin", "*");
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
router.get('/get_user_info', async function(req,res){
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

    // login.api.js async 안에서 Promise.rejcet 사용 하는게 맞는가?
    // const result = await loginApi.getUserInfo(userId);
    // if(result){
    //     //
    // }else{
    //     //
    // }

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