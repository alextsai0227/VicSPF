// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {signUpStyles} from './Style'

// React related package
import React from 'react';
import { Link } from 'react-router-dom';
import UseInputHook from './UseInputHook';
import axios from 'axios';


export default function LogIn(props) {
    const classes = signUpStyles();  
    const [email, updateEmail, resetEmail] = UseInputHook('');
    const [role, updateRole, resetRole] = UseInputHook('');
    const [password, updatePassword, resetPassword] = UseInputHook('');
    
    const roles = [
        { value: 'supplier', label: 'Supplier'},
        { value: 'verifier', label: 'Verifier'}
    ];

    const resetField = () => {
        resetEmail();
        resetRole();
        resetPassword();
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const user = {
            email: email,
            password: password
        };
        // For_Test
        alert(`email: ${email} role: ${role} password: ${password}`);

        if (role === 'supplier'){
            // save supplier
            axios.post(`http://localhost:8000/api/supplier/login`, { user }).then(res => {
                resetField()
                // Todo: should navigate to supplier's page
                props.history.push("/form")
            }).catch(error =>{
                alert(`No account found`);
                // Todo: Signup faild: should give advice to user
            })
        }else{
            // save verifier
            axios.post(`http://localhost:8000/api/verifier/login`, { user }).then(res => {
                resetField()
                // Todo: should navigate to verifier's page
                props.history.push("/form")
            }).catch(err =>{
                alert(`No account found`);
                // Todo: Signup faild: should give advice to user
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
                    Log In
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
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
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        value="submit"
                        className={classes.submit}
                    >Log In
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link to='/signup' variant="body2">
                            Don't have an account? Sign up
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}