var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile.ctrl');
var ctrlAuth = require('../controllers/authentication.ctrl');
var ctrlJob = require('../controllers/job.ctrl');

router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/find', ctrlJob.getJobs);
router.post('/post/submit', ctrlJob.createJob);

router.get('/job/:id', ctrlJob.getJob);

module.exports = router;
