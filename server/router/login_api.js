const express = require('express');
const router = express.Router();
let {User} = require('./../setting/db_connection');

/**
    * @swagger
    * definitions:
    *  user:
    *   type: object
    *   required:
    *     - useremail
    *     - password
    *     - name
    *   properties:
    *     id:
    *       type: integer
    *       description: ObjectId
    *     useremail:
    *       type: string
    *       description: 유저계정
    *     password:
    *       type: string
    *       description: 비밀번호
    *     name:
    *       type: string
    *       description: 유저이름
    */

/**
    * @swagger
    *  /login/get_user:
    *    get:
    *      tags:
    *      - login API
    *      description: id에 해당하는 유저의 email 주소를 출력한다.
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
    *        description: user of selected id
    *        schema:
    *          type: array
    *          items:
    *           $ref: '#/definitions/user'
    */
router.get('/get_user', async function(req,res){
    let userId = req.query.id;
    if(userId == null) res.status(400).send("no param about id");
    else {
        try {
            let user = await User.findOne({where:{id: userId}});
            if(user == null) res.send("no user");
            else res.json(user);
        }
        catch (err) {
            let e = new Error(err);
            e.message = "Fail DB QUERY";
            res.status(400).send(e);
        }
    }
});

module.exports = router;