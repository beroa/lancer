var bitcoin = require("bitcoinjs-lib")
const testnet = bitcoin.networks.testnet;

var JobService = require('./job.serv');
var BlockExplorerService = require('./blockexplorer.serv');

_this = this

<<<<<<< HEAD
const FEE = 200000;

exports.parseTransaction = async function(user, destination, quantity) {
	quantity = parseFloat(quantity)*100000000;
	let user_data = await BlockExplorerService.getAddr(user.address);
	let inputs = await BlockExplorerService.findInputs(user.address, quantity);
	// console.log(user.address);
	// console.log("INPUTS" + inputs)
	// console.log(quantity);
	quantity -= FEE;
	return this.makeTransaction(user.WIF, destination, quantity, inputs);
}
=======
// exports.parseTransaction = async function(user, destination, quantity) {
// 	quantity = parseFloat(quantity)*100000000;
// 	let user_data = await BlockExplorerService.getAddr(user.address);
// 	let inputs = await BlockExplorerService.findInputs(user.address, quantity);
// 	// console.log(user.address);
// 	// console.log("INPUTS" + inputs)
// 	// console.log(quantity);
// 	return this.makeTransaction(user.WIF, destination, quantity, inputs);
// }

const FEE = 200000;
>>>>>>> c5024e3105f40f4402a840366ad5832a756f50c6

exports.userSend = async function(user, destination, quantity) {
	let user_data = await BlockExplorerService.getAddr(user.address);
	quantity = parseFloat(quantity)*100000000;
	let inputs = await BlockExplorerService.findInputs(user.address, quantity);
<<<<<<< HEAD
	// console.log(user.address);
	// console.log("INPUTS" + inputs)
	// console.log(quantity);
=======
	// subtract fees after finding inputs
>>>>>>> c5024e3105f40f4402a840366ad5832a756f50c6
	quantity -= FEE;
	return this.makeTransaction(user.WIF, destination, quantity, inputs);
}

exports.jobFullSend = async function(job, destination) {
	let job_data = await BlockExplorerService.getAddr(job.address);
	var quantity = job_data.balanceSat;
	let inputs = await BlockExplorerService.findInputs(job.address, quantity);
<<<<<<< HEAD
	// console.log(user.address);
	// console.log("INPUTS" + inputs)
	// console.log(quantity);
=======
>>>>>>> c5024e3105f40f4402a840366ad5832a756f50c6
	quantity -= FEE;
	return this.makeTransaction(job.WIF, destination, quantity, inputs);
}

exports.makeTransaction = async function(WIF, destination, quantity, inputs) {
	let key = bitcoin.ECPair.fromWIF(WIF, testnet);
	let tx = new bitcoin.TransactionBuilder(testnet);
	let total = 0;
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
	 console.log("maketx: " + tx.build().toHex());
	return tx.build().toHex();
}