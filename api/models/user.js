var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var bitcoin = require("bitcoinjs-lib")

const testnet = bitcoin.networks.testnet;

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: String,
	hash: String,
	salt: String,
	address: String,
	WIF: String // HIDE ME PLS
});

userSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
	return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign({
		_id: this._id,
		name: this.name,
		exp: parseInt(expiry.getTime() / 1000),
	}, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

userSchema.methods.generateWallet = function() {
	var keyPair = bitcoin.ECPair.makeRandom({network: testnet});
	this.address = keyPair.getAddress();
	this.WIF = keyPair.toWIF();
}


const User = mongoose.model('User', userSchema);
module.exports = User;
