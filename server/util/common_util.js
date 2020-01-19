let crypto = require('crypto');
const crypAlgorithm = 'aes192';
const inputEncoding  = 'base64';
const outputEncoding = 'utf8';
const kakaoHashkey = require('./../../config.json')["kakao_hash_key"];

module.exports.isEmpty = function(param){
    if(param == null) return true;
    if(param === undefined) return true;
    if(param === "") return true;
    return false;
}

module.exports.encryption = function(target){
    let cipher = crypto.createCipher(crypAlgorithm, kakaoHashkey);
    cipher.update(target, outputEncoding, inputEncoding);
    var cipheredOutput = cipher.final(inputEncoding);
    return cipheredOutput;
}

module.exports.decryption = function(target){
    var decipher = crypto.createDecipher(crypAlgorithm, kakaoHashkey);
    decipher.update(target, inputEncoding, outputEncoding);
    var decipheredOutput = decipher.final(outputEncoding);
    return decipheredOutput;
}