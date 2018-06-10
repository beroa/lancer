var JobModel = require('../models/job')

_this = this

exports.getJobs = async function(query, page, limit){
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

exports.createJob = async function(Job){
    var newJob = new JobModel({
        title: Job.title,
        description: Job.description,
        date_created: new Date()
    })
    try{
        var savedJob = await newJob.save()
        return savedJob;
    }catch(e){
        throw Error("Error while Creating Job")
    }
}

exports.updateJob = async function(Job){
    var id = Job.id
    try {
        var oldJob = await Job.findById(id);
    } catch(e) {
        throw Error("Error occured while Finding the Job")
    }
    if(!oldJob){
        return false;
    }
    console.log(oldJob)
    oldJob.title = Job.title
    oldJob.description = Job.description
    console.log(oldJob)
    try {
        var savedJob = await oldJob.save()
        return savedJob;
    } catch(e) {
        throw Error("And Error occured while updating the Job");
    }
}

exports.deleteJob = async function(id){
    try {
        var deleted = await Job.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Job Could not be deleted")
        }
        return deleted
    } catch(e) {
        throw Error("Error Occured while Deleting the Job")
    }
}