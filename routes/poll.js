const router = require('express').Router();
const pollController = require('../controllers/poll');
const requireAuth = require('../middlewares/passport').requireAuth;
const authPoll = require('../middlewares/authPollUser').authPoll;

// new poll
router.post('/newpoll', requireAuth, pollController.newpoll);

// get all polls
router.get('/allpolls', pollController.allpolls);

// get my polls
router.get('/mypolls', requireAuth, pollController.mypolls);

// get single poll
router.get('/polls/:pollId', requireAuth, pollController.singlepoll);

// vote for single poll
router.post('/:pollId/vote/:value', requireAuth, pollController.vote);

// delete single poll
router.delete('/:pollId', requireAuth, authPoll, pollController.deletePoll);

module.exports = router;