console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{
	username: 'Asreet',
	balance: 100
},
{
	username: 'Vsharma',
	balance: 200
}
]);

var accounts = storage.getItemSync('accounts');

//push
accounts.push({
	username: 'Rajan',
	balance: 75},
	{
		username: 'Rajan2',
	balance: 78});
	storage.setItemSync('accounts',accounts);

console.log(accounts);