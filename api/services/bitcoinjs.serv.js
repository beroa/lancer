var bitcoin = require("bitcoinjs-lib")
const testnet = bitcoin.networks.testnet;

var JobService = require('./job.serv');
var BlockExplorerService = require('./blockexplorer.serv');

_this = this

exports.userSend = async function(user, destination, quantity, fee) {
	quantity = parseFloat(quantity);
	fee = parseFloat(fee);

	let inputs = await BlockExplorerService.findInputs(user.address, quantity, fee);
	return this.makeTransaction(user.WIF, destination, quantity, inputs, fee);
}

exports.jobSend = async function(job, destination, quantity, fee) {
	quantity = parseFloat(quantity);
	fee = parseFloat(fee);

	let inputs = await BlockExplorerService.findInputs(job.address, quantity, fee);
	return this.makeTransaction(job.WIF, destination, quantity, inputs, fee);
}

exports.makeTransaction = async function(WIF, destination, quantity, inputs, fee) {
	quantity = Math.floor(quantity*100000000);
	fee = Math.floor(fee*100000000);
	let total = 0;

	// use bitcoinlib.js
	let key = bitcoin.ECPair.fromWIF(WIF, testnet);
	let tx = new bitcoin.TransactionBuilder(testnet);

	// find sum of inputs
	for (let i = 0; i < inputs.length; i++) {
		tx.addInput(inputs[i].id, inputs[i].index);
		total = total + Math.floor(inputs[i].quantity)*100000000;
		console.log(`input ${i}: ${inputs[i].quantity}`);
	}

	// output to destination
	tx.addOutput(destination, quantity);

	// output to keep leftover
	console.log(`total: ${total}`);
	if (total > quantity + fee) {
		tx.addOutput(key.getAddress(), total - (quantity + fee));
	}
	for (let i = 0; i < inputs.length; i++) {
		tx.sign(i, key);
	}

	// console.log(`total ${total} - quantity ${quantity} + fee ${fee} =  ${total-(quantity+fee)}`);
	// console.log(tx.build().toHex());
	return tx.build().toHex();
}