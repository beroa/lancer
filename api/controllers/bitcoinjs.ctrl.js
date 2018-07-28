var mongoose = require('mongoose');
var User = mongoose.model('User');
var Job = mongoose.model('Job');
var BitcoinJSService = require('../services/bitcoinjs.serv');

exports.parseTransaction = async function(req, res, next) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: must log in"
    });
  } else if (!req.query.destination || !req.query.quantity) {
    res.status(401).json({
      "message" : "transaction missing fields"
    });
  } else {
    try {
      // access user based on token
      User.findById(req.payload._id).exec(function(err, user) {
        try {
          var transaction = BitcoinJSService.parseTransaction(user, req.query.destination, req.query.quantity);
          res.status(200).json(transaction);
        } catch (e) {
          res.status(400).json({status: 400, message: e.message});
        }
        
      });
    } catch (e) {
      return res.status(400).json({status: 400, message: e.message});
    }
  }

};
