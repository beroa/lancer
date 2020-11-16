var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ name: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
      if (!user.comparePassword(password)) {
        return done(null, false, { message: 'Password is wrong' });
      }
      return done(null, user);
    });
  }
));