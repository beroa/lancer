var bitcoin = require("bitcoinjs-lib")
const testnet = bitcoin.networks.testnet;

var JobService = require('./job.serv');
var BlockExplorerService = require('./blockexplorer.serv');

_this = this

// exports.parseTransaction = async function(user, destination, quantity) {
// 	quantity = parseFloat(quantity)*100000000;
// 	let user_data = await BlockExplorerService.getAddr(user.address);
// 	let inputs = await BlockExplorerService.findInputs(user.address, quantity);
// 	// console.log(user.address);
// 	// console.log("INPUTS" + inputs)
// 	// console.log(quantity);
// 	quantity -= FEE
// 	return this.makeTransaction(user.WIF, destination, quantity, inputs);
// }

exports.userSend = async function(user, destination, quantity, fee) {
	quantity = parseFloat(quantity);//*100000000;
	fee = parseFloat(fee);//*100000000;
	// let user_data = await BlockExplorerService.getAddr(user.address);
	// // if (quantity > user_data.confirmed_balance) {
	// // 	return "Quantity (${quantity}) is greater than balance (${user_data.confirmed_balance})";
	// // }
	// console.log("wtf");
	let inputs = await BlockExplorerService.findInputs(user.address, quantity, fee);
	// console.log("hello?");
	// console.log(user.address);
	// console.log("INPUTS" + inputs);
	// console.log("QUANTITY" + quantity);
	// console.log("FEE" + fee);
	return this.makeTransaction(user.WIF, destination, quantity, inputs, fee);
}

exports.jobSend = async function(job, destination, quantity, fee) {
	quantity = parseFloat(quantity);//*100000000;
	fee = parseFloat(fee);//*100000000;
	console.log(job.address);
	let job_data = await BlockExplorerService.getAddr(job.address);

	let inputs = await BlockExplorerService.findInputs(job.address, quantity, fee);
	// console.log(`job balance ${job_data.confirmed_balance}`);
	// var quantity = parseFloat(job_data.confirmed_balance) - parseFloat(fee);
	// console.log (`quantity: ${quantity}`);
	console.log(inputs)
	console.log(job.address);
	console.log("INPUTS" + inputs)
	console.log(quantity);
	return this.makeTransaction(job.WIF, destination, quantity, inputs, fee);
}

exports.makeTransaction = async function(WIF, destination, quantity, inputs, fee) {
	console.log("making");
	quantity = Math.floor(quantity*100000000);
	fee = Math.floor(fee*100000000);
	let total = 0;
	// use bitcoinlib.js
	let key = bitcoin.ECPair.fromWIF(WIF, testnet);
	let tx = new bitcoin.TransactionBuilder(testnet);
	// find sum of inputs
	for (let i = 0; i < inputs.length; i++) {
		tx.addInput(inputs[i].id, inputs[i].index);
		total = total + Math.floor(inputs[i].quantity*100000000);
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
	console.log("quantity " + quantity);
	console.log("fee " + fee);
	console.log(`total ${total} - quantity ${quantity} + fee ${fee} =  ${total-(quantity+fee)}`);
	console.log(tx.build().toHex());

	return tx.build().toHex();
}