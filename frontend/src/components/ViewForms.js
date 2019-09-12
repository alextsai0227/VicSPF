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

function createData(realId, showId, date, status) {
    return { realId, showId, date, status };
}

function showApplication(evt) {
    console.log(evt.target.parentNode.getAttribute('value'));
}

const rows = [
    createData('a094rgj9', '0001', '2019/09/20', 'Unverified'),
    createData('b09erwj9', '0002', '2019/09/01', 'Verifying'),
    createData('cwre4rj9', '0003', '2019/08/11', 'Completed'),
];

export default function ViewForms() {
    const classes = useStyles();

    return (
        <>
            <NaviBar />
            <Container component="main" maxWidth="md">
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
                        <TableBody onClick={showApplication}>
                            {rows.map(row => (
                                <TableRow value={row.realId} hover={true} >
                                    <TableCell >{row.showId}</TableCell>
                                    <TableCell  align="right" >{row.date}</TableCell>
                                    <TableCell  align="right" >{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>
        </>
    );
}
