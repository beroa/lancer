var CommentService = require('../services/comment.serv')

exports.getComment = async function(req, res, next) {
    var id = req.params.id
try{
        var Comment = await CommentService.getComment(id)
        return res.status(200).json({status: 200, data: Comment, message: "Succesfully Recieved Comment"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getComments = async function(req, res, next){
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    var jobId = req.params.id;

    try {
        var Comments = await CommentService.getComments(jobId);
        return res.status(200).json({status: 200, data: Comments, message: "Succesfully Recieved Comments"});
    } catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createComment = async function(req, res, next){
    var comment = {
        jobId: req.params.id,
        parentId: req.body.parentId,
        content: req.body.content,
        author: req.body.author
    }

    try{
        var createdComment = await CommentService.createComment(comment)
        return res.status(201).json({status: 201, data: createdComment, message: "Succesfully Created Comment"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Comment Creation was Unsuccesfull: " + e})
    }
}