const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Verifier = require('../../models/verifier');

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;
  console.log("api create user")
  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Verifier.model(user);

  finalUser.setPassword(user.password);
  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }))
    .catch((err) => {
      console.log(err);
    })
    ;
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local_verifier', { session: false }, (err, passportUser, info) => {
    if(err) {
      console.log(err)
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return res.status(400).json({
      errors: {
        message: "couldn't find user"
      }
    });
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Verifier.model.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;