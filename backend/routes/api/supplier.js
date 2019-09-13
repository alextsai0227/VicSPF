const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Supplier = require('../../models/supplier');
const Application = require('../../models/application');
const EmpCohort= require('../../models/emp_cohorts');
// const EmpCurrAbo= require('../../models/emp_curr_abo');
const EmpRecruitAbo= require('../../models/emp_recruit_abo');
const ReadinessAct= require('../../models/readiness_act');
const SocialBenefit = require('../../models/social_benefit');

// ========================Login/Signup route========================
//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
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
  console.log(user)
  const finalUser = new Supplier.model(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }))
    .catch((err) => {
      // console.log(err);
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

  return passport.authenticate('local_supplier', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;

      return res.json({ user: user.getData() });
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
  return Supplier.model.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.getData()});
    });
});

//PUT user route
router.put('/user/:id', auth.optional, (req, res) => {
  const { body: { data } } = req;

  return Supplier.model.updateOne({"_id": req.params.id}, 
  {$set:{"phone": data.phone, "street": data.street, "suburb": data.suburb, "state": data.state,
          "abn": data.abn, "company_name": data.company_name}
  }).then((result) => {
      console.log(result)

      return res.json({ result: result});
    }).catch((err) => {
      console.log(err)
    });
  
});


// ========================application route========================

//POST application route
router.post('/application', auth.optional, (req, res, next) => {
  const { body: { data } } = req;
  let empCohorts = data.cohortEmp
  let empRecruitAbos = data.aboEmp
  let readinessActs = data.jobReadiness
  let socialBenefits = data.socialBenefit
  empCohorts.forEach(function (empCohort, index) {
    const e = new EmpCohort.model(empCohort);
    empCohorts[index] = e  
  });
  empRecruitAbos.forEach(function (empRecruitAbo, index) {
    const e = new EmpRecruitAbo.model(empRecruitAbo);
    empRecruitAbos[index] = e  
  });
  readinessActs.forEach(function (readinessAct, index) {
    const e = new ReadinessAct.model(readinessAct);
    readinessActs[index] = e  
  });
  socialBenefits.forEach(function (socialBenefit, index) {
    const e = new SocialBenefit.model(socialBenefit);
    socialBenefits[index] = e  
  });

  const application = new Application.model();
  application.supplier_id = data.supplier_id
  application.emp_recruit_abo = empRecruitAbos
  application.emp_cohorts = empCohorts
  application.social_benefit = socialBenefits
  application.readiness_act = readinessActs
  try {
    EmpCohort.model.insertMany(empCohorts);
    EmpRecruitAbo.model.insertMany(empRecruitAbos);
    ReadinessAct.model.insertMany(readinessActs);
    SocialBenefit.model.insertMany(socialBenefits);
    // EmpCurrAbo.model.insertMany(application.);
    application.save()
    return res.json({ application: application });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

//GET application route
router.get('/application/:id', auth.optional, (req, res) => {
  return Application.model.findById(req.params.id)
    .then((application) => {
      if(!application) {
        return res.sendStatus(400);
      }

      return res.json({ application: application.getData()});
    });
  
});

//Delete application route
router.delete('/application/:id', auth.optional, (req, res) => {
  Application.model.findOne({_id: req.params.id})
    .then((result) => {
      result.emp_recruit_abo.forEach(function (empRecruitAbo) {
        EmpRecruitAbo.model.deleteOne({"_id": empRecruitAbo._id}).then()
      });
      result.emp_cohorts.forEach(function (empCohort) {
        EmpCohort.model.deleteOne({_id: empCohort._id}).then()
      });
      result.social_benefit.forEach(function (socialBenefit) {
        SocialBenefit.model.deleteOne({_id: socialBenefit._id}).then()
      });
      result.readiness_act.forEach(function (readinessAct) {
        ReadinessAct.model.deleteOne({_id: readinessAct._id}).then().catch(err => {console.log(err)})
      });
    })
  
  return Application.model.deleteOne({_id: req.params.id})
    .then((result) => {
      res.status(204).send({result: result});
    });
  
});


module.exports = router;