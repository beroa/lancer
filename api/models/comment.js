var mongoose = require( 'mongoose' );
var mongoosePaginate = require('mongoose-paginate');

var commentSchema = new mongoose.Schema({
	jobId: {
		type: String
	},
	parentId: String,
	content: {
		type: String
	},
	author: String,
	authorId: String,
	date_created: Date,
  	image: String,
  	image_type: String
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;