 var CommentModel = require('../models/comment')

_this = this

exports.getComment = async function(id){
    try {
        var Comment = await CommentModel.findById(id);
        return Comment;
    } catch (e) {
        throw Error('Error while Paginating Comments')
    }
}

exports.getComments = async function(jobId) {
    try {
        var Comments = await CommentModel.find( { jobId: jobId } )
        return Comments;
    } catch (e) {
        throw Error('Error while Paginating Comments')
    }
}

exports.createComment = async function(Comment){
    var newComment = new CommentModel({
        jobId: Comment.jobId,
        parentId: Comment.parentId,
        content: Comment.content,
        author: Comment.author,
        date_created: new Date()
    })
    try{
        var savedComment = await newComment.save()
        return savedComment;
    }catch(e){
        throw Error("Error while Creating Comment")
    }
}