var JobService = require('../services/job.serv');
var BitcoinJSService = require('../services/bitcoinjs.serv.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getJob = async function(req, res, next) {
    var id = req.params.id
    try{
        var Job = await JobService.getJob(id)
        return res.status(200).json({status: 200, data: Job, message: "Succesfully Recieved Job"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getJobs = async function(req, res, next){
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
        var Jobs = await JobService.getJobs({}, page, limit)
        return res.status(200).json({status: 200, data: Jobs, message: "Succesfully Recieved Jobs"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createJob = async function(req, res, next){
    var job = {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    }

    try{
        var createdJob = await JobService.createJob(job);
        return res.status(201).json({status: 201, data: createdJob, message: "Succesfully Created Job"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Job Creation was Unsuccesfull: " + e})
    }
}

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
        var user = await User.findById(req.payload._id);
        var recipient = await User.findByName(req.body.destination);
        // res.status(200).json(user);
        var Job = await JobService.getJob(req.params.id);
        if (Job.author != user) {
            res.status(401).json({
              "message" : "UnauthorizedError: not your job"
            });
        } else {
            try {
              BitcoinJSService.jobSend(user, req.query.destination, req.query.quantity)
              .then(function(response) {
                console.log(response);
                BlockExplorerService.postTx(response)
                .then(function(response) {
                  return res.status(200).json(response);
                }).catch(function(err) {
                  res.status(400).json({status: 400, message: err.message});
                })
              }).catch(function(err) {
                res.status(400).json({status: 400, message: err.message});
              })
            } catch (e) {
              res.status(400).json({status: 400, message: e.message});
            }
        }
    }
}