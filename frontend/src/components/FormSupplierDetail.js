import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NaviBar from './PrimarySearchAppBar';
import UseInputHook from './UseInputHook';

const states = [
  { value: 'NSW', label: 'NSW'},
  { value: 'VIC', label: 'VIC'},
  { value: 'QLD', label: 'QLD'},
  { value: 'WA', label: 'WA' },
  { value: 'SA', label: 'SA'},
  { value: 'TAS', label: 'TAS'},
  { value: 'ACT', label: 'ACT'},
  { value: 'NT', label: 'NT'}
];

const useStyles = makeStyles(theme => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  }
})); 

export default function FormSupplierDetail(){
  const classes = useStyles();
  const [companyName, updateCompanyName, resetCompanyName] = UseInputHook('');
  const [abn, updateAbn, resetAbn] = UseInputHook('');
  const [email, updateEmail, resetEmail] = UseInputHook('');
  const [phone, updatePhone, resetPhone] = UseInputHook('');
  const [street, updateStreet, resetStreet] = UseInputHook('');
  const [suburb, updateSuburb, resetSuburb] = UseInputHook('');
  const [state, updateState, resetState] = UseInputHook('');
  const [password, updatePassword, resetPassword] = UseInputHook('');
    

  const handleUpdate = (evt) => {
    // Todo: save the data into database.
    evt.preventDefault();
    alert(`Company Name: ${companyName} ABN: ${abn} email: ${email} phone: ${phone} 
           street: ${street} suburb: ${suburb} state: ${state} password: ${password}`);
    resetCompanyName();
    resetAbn();
    resetPhone();
    resetStreet();
    resetSuburb();
    resetState();
    resetPassword();
  }

  // const { values, handleChange } = this.props;
  return (
    <MuiThemeProvider>
    <Container component="main" maxWidth="xs">
      <NaviBar />
      <CssBaseline />
      <div className={classes.paper}>   
        <Typography component="h1" variant="h5">
          Supplier Details
        </Typography>
        <form className={classes.form} onSubmit={handleUpdate}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                // required
                disabled
                hintText="Enter Your Email Address"
                floatingLabelText="Email Address"
                type="text"
                id="email"
                label="Email Address"
                name="email"
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                // required
                hintText="Enter Your Password"
                floatingLabelText="Password"
                type="password"             
                id="password"
                label="Password"
                name="password"
                value={password}
                onChange={updatePassword}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                hintText="Enter Your Company Name"
                floatingLabelText="Supplier Name"
                // required
                type="text"
                id="companyName"
                label="Company Name"
                name="companyName"
                value={companyName}
                onChange={updateCompanyName}
                // onChange={handleChange('supplierName')}
                // defaultValue={values.supplierName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                hintText="Enter Your ABN"
                floatingLabelText="ABN"
                // required
                type="text"
                id="abn"
                label="ABN"
                name="abn"
                value={abn}
                onChange={updateAbn}
                // onChange={handleChange('abn')}
                // defaultValue={values.abn}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // required
                hintText="Enter Your Activity type"
                floatingLabelText="Activity Type"
                type="text"
                id="activityType"
                label="Activity Type"
                name="activityType"
                // onChange={handleChange('activityType')}
                // defaultValue={values.activityType}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  // required
                  hintText="Enter Your Phone Number"
                  floatingLabelText="Phone Number"
                  type="text"
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={updatePhone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  // required
                  hintText="Enter Your Street"
                  floatingLabelText="Street"
                  type="text"
                  id="street"
                  label="Street"
                  name="street"
                  value={street}
                  onChange={updateStreet}               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  // required
                  hintText="Enter Your Suburb"
                  floatingLabelText="Suburb"
                  type="text"
                  id="suburb"
                  label="Suburb"
                  name="suburb"
                  value={suburb}
                  onChange={updateSuburb}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // required
                hintText="Enter Your State"
                floatingLabelText="State"
                type="text"
                id="state"
                label="State"
                name="state"
                value={state}
                onChange={updateState}
                >{states.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Edit
          </Button>
        </form>
      </div>
    </Container>
    </MuiThemeProvider>
  );
}
