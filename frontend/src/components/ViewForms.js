// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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
}));

const rows = [
    { realId: "a094rgj9", showId: "0001", date: "2019/09/20", status: "Unverified" },
    { realId: "b09erwj9", showId: "0002", date: "2019/09/01", status: "Verifying" },
    { realId: "cwre4rj9", showId: "0003", date: "2019/08/11", status: "Completed" },
]

export default function ViewForms(props) {
    const classes = useStyles();

    console.log("===========")
    console.log(props.location.state)

    function showApplicationDetail(evt) {
        console.log(evt.target.parentNode.getAttribute('value'));
        const path = {
            pathname: '/viewformdetail',
            state: props.location.state,
        }
        props.history.push(path)
    }

    return (
        <>
            <NaviBar />
            <Container component="main" maxWidth="md">
                <br />
                <h1> Application History </h1>
                <Paper className={classes.root}>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Application ID</TableCell>
                                <TableCell align="right">Created Date</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody onClick={showApplicationDetail}>
                            {rows.map(row => (
                                <TableRow value={row.realId} hover={true} >
                                    <TableCell >{row.showId}</TableCell>
                                    <TableCell align="right" >{row.date}</TableCell>
                                    <TableCell align="right" >{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>
        </>
    );
}
