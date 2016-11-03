var crypto = require('crypto-js');

var secretMessage= {
name: 'Vipin',
secretName: '888'};

var secretKey = '2345';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);

var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage);
