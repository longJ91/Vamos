class CustomError extends Error {
    constructor(message= 'error', status = 500 ,...params) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
        this.message = message;
        this.status = status;
    }
}
module.exports.CustomError = CustomError;

const wrap = function(fn){
    return async function(req,res, next){
        await fn(req, res, next).catch(next);
    }
}

module.exports.wrap = wrap;