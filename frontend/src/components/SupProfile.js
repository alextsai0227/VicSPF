import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UseInputHook from './UseInputHook';
import NaviBar from './PrimarySearchAppBar';

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
    '@global': {
        body: {
        backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function SupProfile2() {
    const classes = useStyles();  
    const [companyName, updateCompanyName, resetCompanyName] = UseInputHook('');
    const [abn, updateAbn, resetAbn] = UseInputHook('');
    const [email, updateEmail, resetEmail] = UseInputHook('');
    const [phone, updatePhone, resetPhone] = UseInputHook('');
    const [street, updateStreet, resetStreet] = UseInputHook('');
    const [suburb, updateSuburb, resetSuburb] = UseInputHook('');
    const [state, updateState, resetState] = UseInputHook('');
    const [password, updatePassword, resetPassword] = UseInputHook('');
      
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Company Name: ${companyName} ABN: ${abn} email: ${email} phone: ${phone} 
               street: ${street} suburb: ${suburb} state: ${state} password: ${password}`);

    return (
        <>
            <NaviBar />
            <Container component="main" maxWidth="xs">
                
                <CssBaseline />
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Supplier Profile
                    </Typography>

                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="email"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    defaultValue="supplier@gmail.com"
                                    InputProps={{
                                        readOnly: true,
                                      }}
                                    // value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="outlined"
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
                                    required
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    id="companyName"
                                    label="Company Name"
                                    name="companyName"
                                    value={companyName}
                                    onChange={updateCompanyName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    id="abn"
                                    label="ABN"
                                    name="abn"
                                    value={abn}
                                    onChange={updateAbn}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="outlined"
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
                                    required
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    id="street"
                                    label="Street"
                                    name="street"
                                    value={street}
                                    onChange={updateStreet}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField        
                                    required
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    id="suburb"
                                    label="Suburb"
                                    name="suburb"
                                    value={suburb}
                                    onChange={updateSuburb}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="outlined"
                                    select
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            value="submit"
                            className={classes.submit}
                        >Update
                        </Button>                  
                    </form>
                </div>
            </Container>
        </>
    );
}


  

  