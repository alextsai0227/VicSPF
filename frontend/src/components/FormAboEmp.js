import React from 'react';
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

export default function AboEmpTable() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        tableOneColumns: [
            { title: 'Existing Aboriginal Employee Roles ', field: 'existingRoles'},
            { title: 'Years Recruited', field: 'yearsRecruited', type: 'numeric' }
        ],
        tableOneData: [
            { existingRoles: 'Waiter', yearsRecruited: '1' },
            { existingRoles: 'Accountant', yearsRecruited: '4' },
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