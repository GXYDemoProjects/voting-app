const validator = require('validator');

const checkUser = (req, res, next) => {
  // check email
  console.log('req.body:', req.body);
  req.body.email = req.body.email.trim();

  const validEmail = validator.isEmail(req.body.email);
  // check password
  const validPassword = validator.isLength(req.body.password, { min: 7 });
  // if have username, check it
  let validUserName = true;
  if(req.body.userName) {
    req.body.userName = req.body.userName.trim();
    validUserName = !validator.isEmpty(req.body.userName);
  }
  if(validEmail && validPassword && validUserName) {
    next();
  } else {
    return res.status(422).send({error:'Have invalid data'});
  }
};

const checkNewPoll = (req, res, next) => {
  // check title
  req.body.title = req.body.title.trim();
  const validTitle = !validator.isEmpty(req.body.title);
  // check description
  req.body.description = req.body.description.trim();
  const validDescription = !validator.isEmpty(req.body.description);
  
  // check candidates
  let validCandidates = true;
  if(!Array.isArray(req.body.candidates) || req.body.candidates.length === 0) {
    validCandidates = false;
  } else {
    let candidates = req.body.candidates;
    candidates = candidates.map(candidate => candidate.trim());
    req.body.candidates = candidates;
    const test = {};
    for(let candidate of candidates) {
      if(validator.isEmpty(candidate) || test[candidate]) {
        validCandidates = false;
        break;
      }
      test[candidate] = 1;
    }
  }
  // checkAll
  if(validTitle && validDescription && validCandidates) {
    next();
  } else {
    return res.status(422).send({error:'Have invalid data'});
  }
  
}

const checkVote = (req, res, next) => {
  // check voteValue
  req.body.voteValue = req.body.voteValue.trim();
  const validVote = !validator.isEmpty(req.body.voteValue);
  // checkAll
  if(validVote) {
    next();
  } else {
    return res.status(422).send({error:'Invalid data'});
  }
}

module.exports = {checkUser, checkNewPoll, checkVote};

