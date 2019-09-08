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

function getSteps() {
  return ['Aboriginal Employment', 'Cohorts Employment', 
          'Verified Social Benefits', 'Job Readiness Activities', 'Preview', 'Complete'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <FormAboEmp /> ;
    case 1:
      return <FormCohortsEmp /> ;
    case 2:
      return <FormSocialBenefit /> ;
    case 3:
      return <FormJobReadiness /> ;
    case 4:
      return <FormPreview /> ;
    case 5:
      return <FormComplete /> ;
  }
}

export default function FormStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  //   const [activeStep, setActiveStep] = React.useState({
  //   supplierName: '',
  //   abn: '',
  //   activityType: ''
  //   });
  const steps = getSteps();
  
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
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
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}