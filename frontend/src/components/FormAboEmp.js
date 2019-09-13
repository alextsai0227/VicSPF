import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
}));

export default function FormAboEmp(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        tableOneColumns: [
            { title: 'Existing Aboriginal Employee Roles ', field: 'emp_role'},
            { title: 'Years Recruited', field: 'emp_year', type: 'numeric' }
        ],
        tableOneData: [
            { emp_role: 'Waiter', emp_year: '1' },
            { emp_role: 'Accountant', emp_year: '4' },
        ],
        tableTwoColumns: [
            { recruit_role: 'Aboriginal Roles To Be Recruited ', field: 'recruit_year' },
            { recruit_role: 'Proposed Recruitment Year', field: 'recruit_year', type: 'numeric' }
        ],
        tableTwoData: [
            { recruit_role: 'Chef', recruit_year: '2020' },
            { recruit_role: 'Waitress', recruit_year: '2021' },
        ], 
    });

    useEffect(()=>{
        //componentDidMount 及 componentDidUpdate
        window.VIC.aboEmp = state.tableTwoData
        window.VIC.aboCur = state.tableOneData

        //componentDidUpdate 及 componentWillUnmount
        return(()=>{
        })
    
    })
    return (
        <div className={classes.root}>
            <h1>Aboriginal Employment</h1>
            {/* existing employment table */}
            <MaterialTable
                title="Existing Employment"
                className={classes.table}
                columns={state.tableOneColumns}
                data={state.tableOneData}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.push(newData);
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.splice(data.indexOf(oldData), 1);
                                setState({ ...state, data });
                            }, 600);
                        }),
                }}
            />
            {/* future employment table */}
            <MaterialTable
                title="Future Employment"
                className={classes.table}
                columns={state.tableTwoColumns}
                data={state.tableTwoData}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.push(newData);
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.splice(data.indexOf(oldData), 1);
                                setState({ ...state, data });
                            }, 600);
                        }),
                }}
            />
        </div>
    );
}