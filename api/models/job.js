var mongoose = require( 'mongoose' );
var mongoosePaginate = require('mongoose-paginate');

var jobSchema = new mongoose.Schema({
  title:  {
  	type: String,
  	required: true
  },
  description: String,
  date_created: Date
});

jobSchema.plugin(mongoosePaginate);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;