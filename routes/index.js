const authRouter = require('./auth');
const pollRouter = require('./poll');
const router = require('express').Router();

router.use('/', authRouter);
router.use('/', pollRouter);
module.exports = router;