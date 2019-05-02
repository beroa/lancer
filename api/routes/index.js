var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');

const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
}); 

// module.exports = function(app) {
ctrlAuth = require('../controllers/authentication.ctrl');
var ctrlProfile = require('../controllers/profile.ctrl');
var ctrlJob = require('../controllers/job.ctrl');
var ctrlComment = require('../controllers/comment.ctrl');
var ctrlBitcoinJS = require('../controllers/bitcoinjs.ctrl');

router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/find', ctrlJob.getJobs);
router.post('/post/submit', ctrlJob.createJob);

router.get('/job/:id', ctrlJob.getJob);
router.get('/job/:id/jobSend', auth, ctrlBitcoinJS.jobSend);

router.get('/job/:id/comments', ctrlComment.getComments);
router.post('/job/:id/comments/submit', ctrlComment.createComment);

router.get('/usersend', auth, ctrlBitcoinJS.userSend);
// };


module.exports = router;
