import React ,{ useEffect }from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NaviBar from './PrimarySearchAppBar';
import UseInputHook from './UseInputHook';
import axios from 'axios';



export default function FormSupplierDetail(props) {
  const [company_name, updateCompanyName, resetCompanyName] = UseInputHook('');
  const [abn, updateAbn, resetAbn] = UseInputHook('');
  const [phone, updatePhone, resetPhone] = UseInputHook('');
 
  useEffect(()=>{
    if (props.location && props.location.state){
        //componentDidMount 及 componentDidUpdate
        const data = JSON.parse(props.location.state)
        if (data.company_name) {
          updateCompanyName(data.company_name)
        } 
        if (data.phone){
          updatePhone(data.phone)
        } 
        if (data.abn){
          updateAbn(data.abn)
        }
        console.log(`更新後的 State`)
        //componentDidUpdate 及 componentWillUnmount
        return(()=>{
            console.log(`更新前的 State`)
        })
    }

  })



  // const getSupplierDetail = () => {
  //   const token = 'Token ' + window.localStorage.getItem('token')
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': token
  //   }
    
  //   axios.get(`http://localhost:8000/api/supplier/current`, {
  //       headers: headers
  //     })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
  
  const handleUpdate = () => {
    
  }

  return (
            <div>
            <NaviBar props={props}/>
            <MuiThemeProvider>
              <React.Fragment>
                  <div>
                    <h1>Supplier Details</h1>
                    <TextField
                        floatingLabelText="Company Name"
                        value={company_name}
                        onChange={updateCompanyName}
                    />
                    <br />
                    <TextField
                        floatingLabelText="ABN"
                        value={abn}
                        onChange={updateAbn}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        value={phone}
                        onChange={updatePhone}
                    />
                    <br />
                    <Button variant="contained" color="primary" onClick={handleUpdate}>
                Update
              </Button>
            </div>
            </React.Fragment>
      </MuiThemeProvider>
    </div>
  );

}
