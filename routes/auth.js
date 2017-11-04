const router = require('express').Router();
const authController = require('../controllers/authentication');
const requireSignin = require('../middlewares/passport').requireSignin;
const requireAuth = require('../middlewares/passport').requireAuth;
const validator = require('../middlewares/validator');

router.post('/signin', validator.checkUser, requireSignin, authController.signin);
router.post('/signup', validator.checkUser, authController.signup);
router.get('/auth', requireAuth, authController.tokenAuthentication)


module.exports = router;