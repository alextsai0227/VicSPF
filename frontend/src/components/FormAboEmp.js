import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from 'material-ui/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    addButton: {
        textAlign: 'right',
    }
}));

function createData(role, year) {
    return { role, year };
}

const rows = [
    createData('Chief', 2),
    createData('Waiter', 3),
];

export default function AboEmpTable() {
    const classes = useStyles();

    return (
        <>
            <Button variant="contained" size="medium" color="primary" className={classes.addButton}>
                Add
            </Button>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                            <TableCell align="center">Aboriginal Roles To Be Recruited</TableCell>
                            <TableCell align="right">Proposed Recruitment Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.role}>
                                <TableCell align="left">
                                    <EditIcon />
                                </TableCell>
                                <TableCell> 
                                    <DeleteIcon />
                                </TableCell>
                                <TableCell align="center">{row.role}</TableCell>
                                
                                <TableCell align="right">{row.year}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </>
    );
}