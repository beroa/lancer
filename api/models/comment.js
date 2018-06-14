var mongoose = require( 'mongoose' );
var mongoosePaginate = require('mongoose-paginate');

var commentSchema = new mongoose.Schema({
	jobId: {
		type: String
	},
	parentId: String,
  	content:  {
  		type: String
  	},
  	author: String,
  	date_created: Date
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;