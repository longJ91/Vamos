const whiteList = ['http://localhost:4200','http://localhost:8000', 'http://localhost:3000'];

module.exports.corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin)!== -1){
            callback(null, true);
        }else{
            callback(Error(`Not allowed by Cors`));
        }
    },
    credentials: true
};