var express = require('express');
var router = express.Router();
var rp = require('request-promise');


exports.getAddr = async function(addr) {
    let response = await rp('https://testnet.blockexplorer.com/api/addr/' + addr);
	let data = await JSON.parse(response);
	return data;
}

exports.getTx = async function(tx) {
    let response = await rp('https://testnet.blockexplorer.com/api/tx/' + tx);
	let data = await JSON.parse(response);
	return data;
}

exports.getUnspent = async function(addr) {
	let response = await rp('https://testnet.blockexplorer.com/api/addr/' + addr + '/utxo');
	let data = await JSON.parse(response);
	return data;
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
	return JSON.stringify(response);
}

tx_input = function(id, index, quantity) {
    this.id = id;
    this.index = index;
    this.quantity = quantity;
    return this;
}

exports.findInputs = async function(addr, quantity) {
	var inputs = [];
	var input;
	let inputs_quantity = 0;
	let response = await this.getUnspent(addr);
	for (let i = 0; i < response.length && inputs_quantity < quantity; i++) {
		input = new tx_input(response[i].txid, response[i].vout, response[i].satoshis);
		inputs.push(input);
		console.log("INP" + input);
		inputs_quantity += input.quantity;
	}
	return inputs;
}

// exports.findUnspent = async function(addr_data, quantity) {
// 	let tx_count = (addr_data.transactions).length;
// 	var inputs = [];
// 	let inputs_quantity = 0;

//     for (let i = 0; i < tx_count && inputs_quantity < quantity; i++) {
//         var input = await this.findUnspentOnTx(addr_data.addrStr, addr_data.transactions[i]);
//         if (input != 0) {
//         	inputs_quantity += input.quantity;
//         	inputs.push(input);
//         }
//     }
//     console.log(JSON.stringify(inputs));
//     return inputs;
// }

// exports.findUnspentOnTx = async function(addr, tx) {
// 	var input;
// 	tx_data = await this.getTx(tx);

//     let vout_count = (tx_data.vout).length;
//     console.log(vout_count);
//     for (let j = 0; j < vout_count; j++) {
//     	console.log(tx_data.vout[j]);
//         if (tx_data.vout[j].scriptPubKey.addresses[0] == addr &&
//         	tx_data.vout[j].spentTxId == null) {
//             input = new tx_input(
//             	tx_data.txid,
//             	tx_data.vout[j].n,
//             	tx_data.vout[j].value*100000000);
//         	console.log("match");
//         	console.log("input: " + input.id + " " + input.index);
//             return input;
//         } else {
//             console.log("no match");
//         }
//     }
//     return 0;
// }