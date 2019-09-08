import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto'
    }
}));

export default function FormAboEmp() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: 'Aboriginal Roles To Be Recruited ', field: 'role' },
            { title: 'Proposed Recruitment Year', field: 'year', type: 'numeric' }
        ],
        data: [
            { role: 'Chief', year: 2 },
            { role: 'Waiter', year: 3 }
        ],
    });

    return (
        <div className={classes.root}>
            <h1>Aboriginal Employment</h1>
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
