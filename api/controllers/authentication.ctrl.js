// var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.register = function(req, res, next) {
  if(!req.body.name || !req.body.password) {
    return res.status(400).send({ "message": "name and password required" });
  }
  var user = new User();
  user.name = req.body.name;
  user.setPassword(req.body.password);
  user.generateWallet();
  user.save(function(err) {
    if (err) {
      return res.status(400).send({ message: 'Authentication failed. Wrong password.' });
    } else {
      return res.json(user.generateJwt());
    }
  });
};

exports.login = function(req, res, next) {
  if(!req.body.name|| !req.body.password) {
    return res.status(400).send({ "message": "name and password required" });
  }
  console.log("login")

  User.findOne({
    name: req.body.name
    }, function(err, user) {
      if (err) {
        return res.status(400).json({status: 400, message: err.message});
      } else {
        if (!user) {
          return res.status(400).send({ "message": "user does not exist" });
        }
        if (user.comparePassword(req.body.password)) {
          console.log('password match')
          return res.json({ token: user.generateJwt() });
        } else {
          return res.status(400).send({ "message": "password does not match" });
        }
        // return res.json({ token: user.generateJwt() });
      }
    })


  passport.authenticate('local', function(err, user, info) {
    var token;
    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);

  User.findOne({
  name: req.body.name
  }, function(err, user) {
    if (err) {
      return res.status(400).json({status: 400, message: err.message});
    } else {
      return res.json({ token: user.generateJwt() });
    }
  })

// var sendJSONresponse = function(res, status, content) {
//   res.status(status);
//   res.json(content);
// };

// exports.loginRequired = function(req, res, next) {
//   if (req.headers.Authorization) {
//     next();
//   } else {
//     return res.status(401).json({ message: 'Unauthorized user!' });
//   }
// };

  // passport.authenticate('local', function(err, user, info) {
  //   var token;
  //   if (err) {
  //     res.status(404).json(err);
  //     return;
  //   }
  //   if(user){
  //     token = user.generateJwt();
  //     res.status(200);
  //     res.json({
  //       "token" : token
  //     });
  //   } else {
  //     res.status(401).json(info);
  //   }
  // })(req, res);
};