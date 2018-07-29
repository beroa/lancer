var mongoose = require('mongoose');
var User = mongoose.model('User');
var Job = mongoose.model('Job');
var BitcoinJSService = require('../services/bitcoinjs.serv');
var BlockExplorerService = require('../services/blockexplorer.serv.js')

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
          BitcoinJSService.parseTransaction(user, req.query.destination, req.query.quantity)
          .then(function(response) {
            console.log("resp: "+response);
            BlockExplorerService.postTx(response)
            .then(function(response) {
              console.log("resp2: "+response);
              return res.status(200).json(response);
            }).catch(function(err) {
              console.log("err: "+err);
              res.status(400).json({status: 400, message: err.message});
            })
          }).catch(function(err) {
            res.status(400).json({status: 400, message: err.message});
          })

          // var posted_transaction = BlockExplorerService.postTx(transaction);
        } catch (e) {
          res.status(400).json({status: 400, message: e.message});
        }
        
      });
    } catch (e) {
      return res.status(400).json({status: 400, message: e.message});
    }
  }

};
