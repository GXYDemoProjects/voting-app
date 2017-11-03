const router = require('express').Router();
const authController = require('../controllers/authentication');
const requireSignin = require('../middlewares/passport').requireSignin;
const requireAuth = require('../middlewares/passport').requireAuth;

router.post('/signin', requireSignin, authController.signin);
router.post('/signup', authController.signup);
router.get('/auth', requireAuth, authController.tokenAuthentication)


module.exports = router;