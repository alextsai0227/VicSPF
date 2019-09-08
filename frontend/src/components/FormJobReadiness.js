import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto'
    },
}));

export default function FormJobReadiness() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: 'Group ', field: 'group' },
            { title: 'Number of People', field: 'numPeople', type: 'numeric' },
            { title: 'Number of Hours', field: 'numHours', type: 'numeric' }
        ],
        data: [
            { group: 'Disengaged Youth', numPeople: 12, numHours: 50 },
            { group: 'Single parents', numPeople: 20, numHours: 30 },
        ],
    });

    return (
        <div className={classes.root}>
            <h1>Job Readiness Activities</h1>
            <MaterialTable
                className={classes.table}
                columns={state.columns}
                data={state.data}
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

