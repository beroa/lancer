var mongoose = require('mongoose');
var User = mongoose.model('User');
var Job = mongoose.model('Job');
var UserModel = require('../models/user');

var JobService = require('../services/job.serv.js');
var BitcoinJSService = require('../services/bitcoinjs.serv');
var BlockExplorerService = require('../services/blockexplorer.serv.js')

exports.userSend = async function(req, res, next) {
	if (!req.payload._id) {
		res.status(401).json({
			"message" : "UnauthorizedError: must log in"
		});
	} else if (!req.query.destination || !req.query.quantity || !req.query.fee) {
		res.status(401).json({
			"message" : "transaction missing fields"
		});
	} else {
		try {
			// access user based on token
			User.findById(req.payload._id).exec(function(err, user) {
				try {
					// create transaction hex
					BitcoinJSService.userSend(user, req.query.destination, req.query.quantity, req.query.fee)
					.then(function(response) {
						// post transaction
						BlockExplorerService.postTx(response)
						.then(function(response) {
							return res.status(200).json(response);
						}).catch(function(err) {
							res.status(400).json({status: 400, message: "posttx "+err.message});
						})
					}).catch(function(err) {
						res.status(400).json({status: 400, message: "usersend "+err.message});
					})
				} catch (e) {
					res.status(400).json({status: 400, message: e.message});
				}
			});
		} catch (e) {
			return res.status(400).json({status: 400, message: e.message});
		}
  }
};

exports.completeJob = async function(req, res, next) {
	var request = {
		jobId: req.params.id,
		destination: req.body.destination
	}

	if (!req.payload._id) {
		res.status(401).json({
			"message" : "UnauthorizedError: private profile"
		});
	} else {
		var User = await UserModel.findById(req.payload._id);
		var recipient = await UserModel.findOne({ name: req.body.destination });
		var Job = await JobService.getJob(req.params.id);
		
		if (Job.author != User.name) {
			res.status(401).json({
				"message" : "UnauthorizedError: not your job"
			});
		} else {
			try {
				BitcoinJSService.jobFullSend(Job, recipient.address).then(function(response) {
					console.log(response);
					BlockExplorerService.postTx(response).then(function(response) {
						return res.status(200).json({res: response, message: "transaction posted"});
					}).catch(function(err) {
						res.status(400).json({status: 400, message: "posttx " + err.message});
					})
				}).catch(function(err) {
					res.status(400).json({status: 400, message: "jobFullSend " + err.message});
				})
			} catch (e) {
				res.status(400).json({status: 400, message: e.message});
			}
		}
	}
}