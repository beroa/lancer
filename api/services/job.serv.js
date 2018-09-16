var JobModel = require('../models/job')
var mongoose = require('mongoose');
var Job = mongoose.model('Job');

_this = this

exports.getJob = async function(id) {
    try {
        var Job = await JobModel.findById(id);
        return Job;
    } catch (e) {
        throw Error('Error while Paginating Jobs')
    }
}

exports.getJobs = async function(query, page, limit) {
    
    var options = {
        page,
        limit
    }
    try {
        var Jobs = await JobModel.paginate(query, options)
        return Jobs;
    } catch (e) {
        throw Error('Error while Paginating Jobs')
    }
}

exports.createJob = async function(JobData) {
    
    var newJob = new Job();
    newJob.title = JobData.title;
    newJob.description = JobData.description;
    newJob.author = JobData.author;
    newJob.date_created = new Date();
    newJob.generateWallet();

    try{
        var savedJob = await newJob.save()
        return savedJob;
    }catch(e){
        throw Error("Error while Creating Job")
    }
}

exports.completeJob = async function(user, job, recipient) {
    
    var newJob = new Job();
    newJob.title = JobData.title;
    newJob.description = JobData.description;
    newJob.author = JobData.author;
    newJob.date_created = new Date();
    newJob.generateWallet();

    try{
        var savedJob = await newJob.save();
        return savedJob;
    }catch(e){
        throw Error("Error while Creating Job")
    }
}