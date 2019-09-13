// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// React related package
import React from 'react';
import NaviBar from './PrimarySearchAppBar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    button: {
        marginLeft: '50px',
    },
}));

export default function ViewForms(props) {
    const classes = useStyles();
    const appShowId = "001"; // CHANGE THIS
    const abo_existing_data = [
        { recruit_role: 'Waiter', recruit_year: '1' },
        { recruit_role: 'Accountant', recruit_year: '4' },
    ];
    const abo_future_data = [
        { recruit_role: 'Chef', recruit_year: '2020' },
        { recruit_role: 'Waitress', recruit_year: '2021' },
    ];
    const cohorts_data = [
        { group_name: 'Refugee', curr_emp: 2, future_emp: 5 },
        { group_name: 'Migrant', curr_emp: 0, future_emp: 3 },
    ];
    const social_benefit_data = [
        { company_name: 'ABC company', service_name: 'some service', value: 10000 },
    ];
    const job_readiness_data = [
        { group_name: 'Disengaged Youth', num_people: 12, num_hour: 50 },
        { group_name: 'Single parents', num_people: 20, num_hour: 30 },
    ];
    function handleBack() {
        const path = {
            pathname: '/viewforms',
            state: props.location.state,
        }
        props.history.push(path)
    }
    function handleWithdraw() {
        alert("Are you sure you want to withdraw this application? (Yes)(No)");
    }

    return (
        <>
            <NaviBar />
            <Container component="main" maxWidth="md">
                <h1> Application No.{appShowId} </h1>
                <br />
                <Typography component="h2" variant="h5" align="left">
                    Aboriginal Existing Employment
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Existing Aboriginal Employee Roles</TableCell>
                                <TableCell align="right">Years Recruited</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {abo_existing_data.map(row => (
                                <TableRow >
                                    <TableCell >{row.recruit_role}</TableCell>
                                    <TableCell align="right" >{row.recruit_year}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <br /><br /><br />
                <Typography component="h2" variant="h5" align="left">
                    Aboriginal Future Employment
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Aboriginal Roles To Be Recruited </TableCell>
                                <TableCell align="right">Proposed Recruitment Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {abo_future_data.map(row => (
                                <TableRow >
                                    <TableCell >{row.recruit_role}</TableCell>
                                    <TableCell align="right" >{row.recruit_year}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <br /><br /><br />
                <Typography component="h2" variant="h5" align="left">
                    Cohorts Employment
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Group</TableCell>
                                <TableCell align="center">Current Number Employed</TableCell>
                                <TableCell align="right">Proposed Future Recruitment&nbsp;(Number of)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {cohorts_data.map(row => (
                                <TableRow >
                                    <TableCell >{row.group_name}</TableCell>
                                    <TableCell align="center" >{row.curr_emp}</TableCell>
                                    <TableCell align="right" >{row.future_emp}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <br /><br /><br />
                <Typography component="h2" variant="h5" align="left">
                    Verified Social Benefits
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Social Enterprise</TableCell>
                                <TableCell align="center">Services They Will Provide</TableCell>
                                <TableCell align="right">Potential Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {social_benefit_data.map(row => (
                                <TableRow >
                                    <TableCell >{row.company_name}</TableCell>
                                    <TableCell align="center" >{row.service_name}</TableCell>
                                    <TableCell align="right" >{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <br /><br /><br />
                <Typography component="h2" variant="h5" align="left">
                    Job Readiness Activities
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Group</TableCell>
                                <TableCell align="center">Number of People</TableCell>
                                <TableCell align="right">Number of Hours</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {job_readiness_data.map(row => (
                                <TableRow >
                                    <TableCell >{row.group_name}</TableCell>
                                    <TableCell align="center" >{row.num_people}</TableCell>
                                    <TableCell align="right" >{row.num_hour}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <br /><br />
                <div>
                    <Button onClick={handleBack} className={classes.button} >Back</Button>
                    <Button variant="contained" color="secondary" onClick={handleWithdraw} className={classes.button}>Withdraw</Button>
                </div>

            </Container>
        </>
    );
}