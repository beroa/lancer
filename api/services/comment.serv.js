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
		date_created: new Date(),
		image: Comment.image,
		image_type: Comment.image_type,
		earned: Comment.earned
	})

	try{
		var savedComment = await newComment.save()
		return savedComment;
	}catch(e){
		throw Error("Error while Creating Comment")
	}
}

exports.updateComment = async function(Comment){
    var id = Comment._id;

    try{
        var oldComment = await CommentModel.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Comment")
    }

    if(!oldComment){
        return false;
    }

    console.log(oldComment)

	oldComment.content = Comment.content
	oldComment.image = Comment.image
	oldComment.image_type = Comment.image_type
	oldComment.earned = Comment.earned


    console.log(oldComment)

    try{
        var savedComment = await oldComment.save()
        return savedComment;
    }catch(e){
        throw Error("And Error occured while updating the Comment");
    }
}