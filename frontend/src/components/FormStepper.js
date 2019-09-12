import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormAboEmp from './FormAboEmp';
import FormCohortsEmp from './FormCohortsEmp';
import FormSocialBenefit from './FormSocialBenefit';
import FormJobReadiness from './FormJobReadiness';
import FormPreview from './FormPreview';
import FormComplete from './FormComplete';
import NaviBar from './PrimarySearchAppBar';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 'auto'
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  buttons: {
    // marginBottom: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
}));

export default function FormStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);

    if (activeStep === 4){
      const data = {
        'supplier_id': window.VIC.id,
        'aboEmp': window.VIC.aboEmp,
        'cohortEmp': window.VIC.cohortEmp,
        'jobReadiness': window.VIC.jobReadiness,
        'socialBenefit': window.VIC.socialBenefit
      };
      
      axios({
        method: 'post',
        url: `http://localhost:8000/api/supplier/application`,
        data: {data: data},
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        });
    }
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <FormAboEmp props={props}/> ;
      case 1:
        return <FormCohortsEmp props={props}/> ;
      case 2:
        return <FormSocialBenefit props={props}/> ;
      case 3:
        return <FormJobReadiness props={props}/> ;
      case 4:
        return <FormPreview props={props}/> ;
      case 5:
        return <FormComplete props={props}/> ;
    }
  }

  function getSteps() {
    return ['Aboriginal Employment', 'Cohorts Employment', 
            'Verified Social Benefits', 'Job Readiness Activities', 'Preview', 'Complete'];
  }
  function sitchButton(){
    if(activeStep === steps.length - 1){
      return 'Finish'
    }else if(activeStep === steps.length - 2){
      return 'Submit'
    }else{
      return 'Next'
    }
  }
  return (
    <div>
      <NaviBar />
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              
              {/* <Typography className={classes.instructions}>Submitted Successfully! <br /> You can track the progress here.</Typography>
              <Link to='/profile'>Back to profile</Link> */}
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className={classes.buttons}>
                <Button
                  disabled={activeStep === 0 || activeStep === 5 }
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {sitchButton()}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}