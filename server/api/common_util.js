const wrap = function(fn){
    return async function(req,res, next){
        await fn(req, res, next).catch(next);
    }
}

module.exports.wrap = wrap;