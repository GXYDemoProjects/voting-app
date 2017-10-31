const router = require('express').Router();
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireSignin = passport.authenticate('local', { session: false });

router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);


module.exports = router;