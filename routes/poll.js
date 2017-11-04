const router = require('express').Router();
const pollController = require('../controllers/poll');
const requireAuth = require('../middlewares/passport').requireAuth;
const authPoll = require('../middlewares/authPollUser').authPoll;
const validator = require('../middlewares/validator');
// new poll
router.post('/newpoll', validator.checkNewPoll, requireAuth, pollController.newpoll);

// get all polls
router.get('/allpolls', pollController.allpolls);

// get my polls
router.get('/mypolls', requireAuth, pollController.mypolls);

// get single poll
router.get('/polls/:pollId', requireAuth, authPoll, pollController.singlepoll);

// vote for single poll
router.post('/polls/:pollId/vote', validator.checkVote, requireAuth, pollController.vote);

// delete single poll
router.delete('/:pollId', requireAuth, authPoll, pollController.deletePoll);

module.exports = router;