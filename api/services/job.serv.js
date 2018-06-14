 var JobModel = require('../models/job')

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

exports.createJob = async function(Job) {
    var newJob = new JobModel({
        title: Job.title,
        description: Job.description,
        author: Job.author,
        date_created: new Date()
    })
    try{
        var savedJob = await newJob.save()
        return savedJob;
    }catch(e){
        throw Error("Error while Creating Job")
    }
}