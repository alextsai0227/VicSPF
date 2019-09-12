// Material UI
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';

// React related package
import React ,{ useEffect }from 'react';
import NaviBar from './PrimarySearchAppBar';
import { useInputState, useToggle } from './Hooks';
import { supProfileStyles } from './Style'
import axios from 'axios';

export default function FormSupplierDetail(props) {
  const classes = supProfileStyles();
  const [readOnly, toggle] = useToggle(true);
  const [companyName, updateCompanyName] = useInputState('');
  const [abn, updateAbn] = useInputState('');
  const [email, updateEmail] = useInputState('');
  const [phone, updatePhone] = useInputState('');
  const [street, updateStreet] =  useInputState('');
  const [suburb, updateSuburb] = useInputState('');
  const [state, updateState] =  useInputState('');
  const [password, updatePassword] = useInputState('');

  // const states = [
  //   { value: 'NSW', label: 'NSW'},
  //   { value: 'VIC', label: 'VIC'},
  //   { value: 'QLD', label: 'QLD'},
  //   { value: 'WA', label: 'WA' },
  //   { value: 'SA', label: 'SA'},
  //   { value: 'TAS', label: 'TAS'},
  //   { value: 'ACT', label: 'ACT'},
  //   { value: 'NT', label: 'NT'}
  // ];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Company Name: ${companyName} ABN: ${abn} email: ${email} phone: ${phone} 
    //        street: ${street} suburb: ${suburb} state: ${state} password: ${password}`);
  }
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
  
  return (
    <>    
    {console.log(readOnly)}
      <NaviBar />
      <Container component="main" maxWidth="xs">
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Supplier Profile
                </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                // hintText="Enter Your Email Address"
                                floatingLabelText="Email Address"
                                type="email"
                                id="email"
                                // label="Email Address"
                                // name="email"
                                defaultValue="supplier@gmail.com"
                                readOnly={true}  // ALWAYS TRUE
                                // value={email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                hintText="Enter Your Password"
                                floatingLabelText="Password*"
                                type="password"
                                id="password"
                                // label="Password"
                                // name="password"
                                defaultValue="12345678"
                                readOnly={readOnly}
                                // value={password}
                                onChange={e => updatePassword(e.target.value)}
                            />
                        </Grid>        
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                hintText="Enter Your Company Name"
                                floatingLabelText="Company Name*"
                                type="text"
                                id="companyName"
                                // label="Company Name"
                                // name="companyName"
                                defaultValue="ABC company"
                                readOnly={readOnly}
                                // value={companyName}
                                onChange={e => updateCompanyName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                hintText="Enter Your ABN"
                                floatingLabelText="ABN*"
                                type="text"
                                id="abn"
                                // label="ABN"
                                // name="abn"
                                defaultValue="A67548678"
                                readOnly={readOnly}
                                // value={abn}
                                onChange={e => updateAbn(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                hintText="Enter Your Phone Number"
                                floatingLabelText="Phone*"
                                type="text"
                                id="phone"
                                // label="Phone"
                                // name="phone"
                                defaultValue="042457538"
                                readOnly={readOnly}
                                // value={phone}
                                onChange={e => updatePhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                hintText="Enter Your Street"
                                floatingLabelText="Street*"
                                type="text"
                                id="street"
                                // label="Street"
                                // name="street"
                                defaultValue="swanston street"
                                readOnly={readOnly}
                                // value={street}
                                onChange={e => updateStreet(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField        
                                required
                                fullWidth
                                hintText="Enter Your Suburb"
                                floatingLabelText="Suburb*"
                                type="text"
                                id="suburb"
                                // label="Suburb"
                                // name="suburb"
                                defaultValue="carlton"
                                readOnly={readOnly}
                                // value={suburb}
                                onChange={e => updateSuburb(e.target.value)}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            hintText="Select Your State"
                            floatingLabelText="State"
                            select
                            id="state"
                            // label="State"
                            // name="state"
                            value={state}
                            onChange={updateState}                          
                            >
                            <MenuItem value=""> <em>None</em></MenuItem>
                          <MenuItem value="NSW">NSW</MenuItem>
                          <MenuItem value="VIC">VIC</MenuItem>
                          <MenuItem value="QLD">QLD</MenuItem>
                          <MenuItem value="WA">WA</MenuItem>
                          <MenuItem value="SA">SA</MenuItem>
                          <MenuItem value="TAS">TAS</MenuItem>
                          <MenuItem value="ACT">ACT</MenuItem>
                          <MenuItem value="NT">NT</MenuItem>
                          </TextField>
                        </Grid>                       */}

                        <Grid item xs={12} sm={6}>
                          {readOnly? (<TextField
                            required
                            fullWidth
                            floatingLabelText="State*"
                            defaultValue="VIC"
                            readOnly={true}
                          ></TextField>) 
                          :
                          (<Select
                            required
                            fullWidth
                            hintText="Select Your State"
                            floatingLabelText="State"
                            value={state}
                            onChange={updateState}
                            input={<Input name="state" id="state" />}
                            defaultValue="VIC"
                            // name="state"
                          >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value="NSW">NSW</MenuItem>
                          <MenuItem value="VIC">VIC</MenuItem>
                          <MenuItem value="QLD">QLD</MenuItem>
                          <MenuItem value="WA">WA</MenuItem>
                          <MenuItem value="SA">SA</MenuItem>
                          <MenuItem value="TAS">TAS</MenuItem>
                          <MenuItem value="ACT">ACT</MenuItem>
                          <MenuItem value="NT">NT</MenuItem>
                          </Select> )}   
                      </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        value="Submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={toggle}
                    >{readOnly?"Edit":"Save"}
                    </Button>                  
                </form>
            </div>
        </Container>
    </>
    );
}