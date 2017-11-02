const router = require('express').Router();
const authController = require('../controllers/authentication');
const requireSignin = require('../middlewares/passport').requireSignin;
const requireAuth = require('../middlewares/passport').requireAuth;

router.post('/signin', requireSignin, authController.signin);
router.post('/signup', authController.signup);
router.get('/auth', requireAuth, (req, res) => {
  if(!req.user) {
    return res.status(401).send({error: 'Unauthorized'});
  }
  res.json({message: 'Token Auth success'});
})


module.exports = router;