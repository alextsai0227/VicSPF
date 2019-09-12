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
            { title: 'Existing Aboriginal Employee Roles ', field: 'recruit_role'},
            { title: 'Years Recruited', field: 'recruit_year', type: 'numeric' }
        ],
        tableOneData: [
            { recruit_role: 'Waiter', recruit_year: '1' },
            { recruit_role: 'Accountant', recruit_year: '4' },
        ],
        tableTwoColumns: [
            { title: 'Aboriginal Roles To Be Recruited ', field: 'roleWillRecruit' },
            { title: 'Proposed Recruitment Year', field: 'recruitmentYear', type: 'numeric' }
        ],
        tableTwoData: [
            { roleWillRecruit: 'Chef', recruitmentYear: '2020' },
            { roleWillRecruit: 'Waitress', recruitmentYear: '2021' },
        ], 
    });

    useEffect(()=>{
        //componentDidMount 及 componentDidUpdate
        const data = state.data
        window.VIC.aboEmp = data

        console.log(`更新後的 State ${JSON.stringify(data)}`)
        //componentDidUpdate 及 componentWillUnmount
        return(()=>{
            console.log(`更新前的 State ${JSON.stringify(data)}`)
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