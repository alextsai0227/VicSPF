import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto'
    },
}));

export default function FormCohortsEmp(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        columns: [
            { title: 'Group ', field: 'group_name' },
            { title: 'Current Number Employed', field: 'curr_emp', type: 'numeric' },
            { title: 'Proposed Future Recruitment', field: 'futureNumEmp', type: 'numeric' }
        ],
        data: [
            { group_name: 'Refugee', curr_emp: 2, future_emp: 5 },
            { group_name: 'Migrant', curr_emp: 0, future_emp: 3 },
        ],
    });

    useEffect(()=>{
        //componentDidMount 及 componentDidUpdate
        const data = state.data
        window.VIC.cohortEmp = data
        console.log(`更新後的 State ${JSON.stringify(data)}`)
        //componentDidUpdate 及 componentWillUnmount
        return(()=>{
            console.log(`更新前的 State ${JSON.stringify(data)}`)
        })
    
    })

    return (
        <div className={classes.root}>
            <h1>Cohorts Employment</h1>
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
