const Sequelize = require('sequelize');
const config = require('./../../config.json')["db_config"];

const option = { "host" : config.host , "dialect": config.dialect };
const sequelize = new Sequelize( config.database, config.username,  config.password, option );

let db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./../model/user')(sequelize, Sequelize);
db.TempUser = require('./../model/tempUser')(sequelize, Sequelize);
db.Group = require('./../model/group')(sequelize, Sequelize);
db.VoteDetail = require('./../model/voteDetail')(sequelize, Sequelize);

 module.exports = db;

