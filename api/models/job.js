var mongoose = require( 'mongoose' );
var mongoosePaginate = require('mongoose-paginate');
var bitcoin = require("bitcoinjs-lib")

const testnet = bitcoin.networks.testnet;

var jobSchema = new mongoose.Schema({
  title:  {
  	type: String,
  	required: true
  },
  author: String,
  description: String,
  date_created: Date,
  address: String,
  WIF: String // ENCRYPT ME PLS
});

jobSchema.plugin(mongoosePaginate);

jobSchema.methods.generateWallet = function() {
  var keyPair = bitcoin.ECPair.makeRandom({network: testnet});
  this.address = keyPair.getAddress();
  this.WIF = keyPair.toWIF();
}

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;