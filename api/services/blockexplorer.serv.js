var express = require('express');
var router = express.Router();
var rp = require('request-promise');

exports.getAddr = async function(addr) {
	var options = {
		method: 'GET',
		uri: 'https://chain.so/api/v2/get_address_balance/BTCTEST/' + addr,
		json: true
	};

	let response = await rp(options);
	return response.data;
}

exports.getTx = async function(tx) {
	var options = {
		method: 'GET',
		uri: 'https://testnet.blockexplorer.com/api/tx/' + tx,
		json: true 
	};

	let response = await rp(options);
	return response;
}

exports.getUnspent = async function(addr) {
	var options = {
		method: 'GET',
		uri: 'https://chain.so/api/v2/get_tx_unspent/BTCTEST/' + addr + '/utxo',
		json: true
	};

	let response = await rp(options);
	return response.data;
}

exports.postTx = async function(raw_tx) {
	var options = {
		method: 'POST',
		uri: 'https://testnet.blockexplorer.com/api/tx/send',
		body: {
			rawtx: raw_tx
		},
		json: true
	};

	let response = await rp(options);
	return response;
}

tx_input = function(id, index, quantity) {
	this.id = id;
	this.index = index;
	this.quantity = quantity;
	return this;
}

// quantity is before fee
exports.findInputs = async function(addr, quantity, fee) {
	var input;
	var inputs = [];
	let inputs_quantity = 0;

	let response = await this.getUnspent(addr);
	response = response.txs;

	console.log(`unspent txs ${response}`);

	for (let i = 0; i < response.length; i++) {
		input = new tx_input(response[i].txid, response[i].output_no, response[i].value);
		inputs.push(input);
		inputs_quantity += input.quantity;
	}
	return inputs;
}