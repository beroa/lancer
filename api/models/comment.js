var mongoose = require( 'mongoose' );
var mongoosePaginate = require('mongoose-paginate');

var commentSchema = new mongoose.Schema({
  content:  {
  	type: String,
  	required: true
  },
  author: String,
  date_created: Date
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;