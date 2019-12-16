module.exports.isEmpty = function(param){
    if(param == null) return true;
    if(param === undefined) return true;
    if(param === "") return true;
    return false;
}