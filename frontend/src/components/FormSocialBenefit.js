import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: 'auto'
    },
}));

export default function FormSocialBenefit(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: 'Social Enterprise ', field: 'enterprise' },
            { title: 'Services They Will Provide', field: 'service' },
            { title: 'Potential Value', field: 'value', type: 'numeric' }
        ],
        data: [
            { enterprise: 'ABC company', service: 'some service', value: 10000 },
        ],
    });
    
    useEffect(()=>{
        //componentDidMount 及 componentDidUpdate
        const data = state.data
        window.VIC.socialBenefit = data
        console.log(`更新後的 State ${data[0].role}`)
        //componentDidUpdate 及 componentWillUnmount
        return(()=>{
            console.log(`更新前的 State ${data[0].role}`)
        })
    
    })
    return (
        <div className={classes.root}>
            <h1>Verified Social Benefits</h1>
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

