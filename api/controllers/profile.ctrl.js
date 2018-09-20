var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.profileRead = async function(req, res, next) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "payload._id not found"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        if (err) {
          return res.status(400).send({ message: 'Error' });
        } else { 
          return res.status(200).send({ profile: user });
        }
      })
  }
};
