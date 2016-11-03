console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

 createAccount(
 {
 	name: 'facebook',
 	username: 'someemail@facebook.com',
 	password: 'Password1234!',
 	city: 'Hamirpur',
 	State: 'H.P'
 },
 
 {
 	name: 'twitter',
 	username: 'someemail@twitter.com',
 	password: 'Password1234!',
 	city: 'Pune',
 	State: "Maharashtra" 

 },
 {
 	name: 'hotmail',
 	username: 'someemail@hotmail.com',
 	password: 'Password1234!',
 	city: 'Jalandhar',
 	State: 'Punjab'
 },
 
 {
 	name: 'yahoo',
 	username: 'someemail@yahoo.com',
 	password: 'Password1234!',
 	city: 'Mumbai',
 	State: "Maharashtra" 

 },
 {
 	name: 'gmail',
 	username: 'someemail@gmail.com',
 	password: 'Password1234!',
 	city: 'Goa',
 	State: 'Maharashtra'
 }
 
 );

var twitterAccount = getAccount('facebook');
console.log(twitterAccount);