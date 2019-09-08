// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {signUpStyles} from './Style'

// React related package
import React from 'react';
import { Link } from 'react-router-dom';
import UseInputHook from './UseInputHook';
import { saveToken } from '../Helper';
import axios from 'axios';
// Material UI





export default function SignUp(props) {
    const classes = signUpStyles();  
    const [email, updateEmail] = UseInputHook('');
    const [role, updateRole] = UseInputHook('');
    const [password, updatePassword] = UseInputHook('');
    const roles = [
        { value: 'supplier', label: 'Supplier'},
        { value: 'verifier', label: 'Verifier'}
    ];

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const user = {
            email: email,
            password: password
        };

        if (role === 'supplier'){
            // save supplier
            axios.post(`http://localhost:8000/api/supplier`, { user }).then(res => {
                saveToken(res['data'][user])
                // Todo: should navigate to supplier's page
                props.history.push("/sup-profile")
            }).catch(err =>{
                // Todo: Signup faild: should give advice to user
                console.log(err)
            })
        }else{
            console.log("in verifier")
            // save verifier
            axios.post(`http://localhost:8000/api/verifier`, { user }).then(res => {
                saveToken(res['data'][user])
                // Todo: should navigate to verifier's page
                props.history.push("/ver-profile")
            }).catch(err =>{
                // Todo: Signup faild: should give advice to user
                console.log(err)
            })
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            variant="outlined"
                            type="text"
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={updateEmail}
                        />
                        </Grid> 
                        <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            variant="outlined"
                            select
                            id="role"
                            label="Role"
                            name="role"
                            value={role}
                            onChange={updateRole}
                            >
                            {roles.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
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
                        <FormControlLabel
                            control={<Checkbox value="agreePolicy" color="primary" />}
                            label="By signing up, you agree to SPF's Term of Use and Privacy Policy."
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        value="submit"
                        className={classes.submit}
                    >Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link to="/login" variant="body2">
                            Already have an account? Log In
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
