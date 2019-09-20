import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import NaviBar from './AppBarVerifier';

function handleUpdate() {
  // Todo: save the data into database.
}

class FormVerifierDetail extends Component {
  render() {
    // const { values, handleChange } = this.props;
    return (
      <div>
        <NaviBar />
        <MuiThemeProvider>
          <React.Fragment>
              <div>
                <h1>Verifier Details</h1>
                <TextField
                    hintText="Enter Your Company Name"
                    floatingLabelText="Verifier Name"
                    // onChange={handleChange('supplierName')}
                    // defaultValue={values.supplierName}
                />
                <br />
                <TextField
                    hintText="Enter Your ABN"
                    floatingLabelText="ABN"
                    // onChange={handleChange('abn')}
                    // defaultValue={values.abn}
                />
                <br />
                <TextField
                    hintText="Enter Your Activity type"
                    floatingLabelText="Activity Type"
                    // onChange={handleChange('activityType')}
                    // defaultValue={values.activityType}
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
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormVerifierDetail;