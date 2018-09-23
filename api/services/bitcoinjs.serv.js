var bitcoin = require("bitcoinjs-lib")
const testnet = bitcoin.networks.testnet;

var JobService = require('./job.serv');
var BlockExplorerService = require('./blockexplorer.serv');

_this = this

const FEE = 2000000;

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

exports.userSend = async function(user, destination, quantity) {
	quantity = parseFloat(quantity)*100000000;
	let user_data = await BlockExplorerService.getAddr(user.address);
	let inputs = await BlockExplorerService.findInputs(user.address, quantity);
	// console.log(user.address);
	// console.log("INPUTS" + inputs)
	// console.log(quantity);
	quantity -= FEE;
	return this.makeTransaction(user.WIF, destination, quantity, inputs);
}

exports.jobFullSend = async function(job, destination) {
	// quantity = parseFloat(quantity)*100000000;
	let job_data = await BlockExplorerService.getAddr(job.address);
	var quantity = job_data.balanceSat;
	let inputs = await BlockExplorerService.findInputs(job.address, quantity);
	// console.log(user.address);
	// console.log("INPUTS" + inputs)
	// console.log(quantity);
	quantity -= FEE;
	return this.makeTransaction(job.WIF, destination, quantity, inputs);
}

exports.makeTransaction = async function(WIF, destination, quantity, inputs) {
	let key = bitcoin.ECPair.fromWIF(WIF, testnet);
	let tx = new bitcoin.TransactionBuilder(testnet);
	let total = 0;
	// console.log("INPLEN"+inputs.length);
	for (let i = 0; i < inputs.length; i++) {
		tx.addInput(inputs[i].id, inputs[i].index);
		total += inputs[i].quantity;
		// console.log("TOTAL"+total);
	}
	tx.addOutput(destination, quantity);
	total -= quantity;
	if (total > FEE) {
		tx.addOutput(key.getAddress(), total - FEE);
	}
	for (let i = 0; i < inputs.length; i++) {
		tx.sign(i, key);
	}
	// console.log(tx.build().toHex());
	return tx.build().toHex();
}