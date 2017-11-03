require('dotenv').config();
const jwt = require('jwt-simple');
const User = require('../models/user');

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
}

exports.signin = (req, res, next) => {
  // User has already had their email and password auth'd
  // We just need to give them a token
  console.log('req.user:', req.user);
  if(req.user) {
    res.send({ userName: req.user.userName, token: tokenForUser(req.user) });
  } else {
    res.status(422).send({error: 'Username or password is wrong'})
  }
}

exports.signup = (req, res, next) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  console.log('userName,email,password:', userName, email, password);
  if (!userName || !email || !password) {
    return res.status(422).send({ error: 'You must provide userName, email and password'});
  }

  // See if a user with the given email exists
  User.findOne({ email: email })
  .exec()
  .then(existingUser => {
    console.log('existingUser:', existingUser);
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email has been registed' });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      userName: userName,
      email: email,
      password: password
    });
    user
    .save()
    .then(() => res.json({ userName:userName, token: tokenForUser(user) }))
    .catch(err => next(err))
  });
}

exports.tokenAuthentication = (req, res, next) => {
  if(!req.user) {
    return res.status(401).send({error: 'Unauthorized'});
  }
  res.json({userName: req.user.userName});
}

