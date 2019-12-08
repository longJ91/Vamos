let swaggerUi = require('swagger-ui-express');
let swaggerJsdoc= require('swagger-jsdoc');
let express = require('express');

const router = express.Router();

const options = {
    swaggerDefinition: {
        info: {
            title: 'Vamos API docs',
            version: '1.0.0',
            description: 'Test vamos API ',
        }
    },
    apis: [ __base +'/router/*.js' , __base +'/model/*.js']
};

const specs = swaggerJsdoc(options);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;