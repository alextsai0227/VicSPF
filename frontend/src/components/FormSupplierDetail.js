import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class FormSupplierDetail extends Component {
  render() {
    // const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <h1>Supplier Details</h1>
            <TextField
                hintText="Enter Your Company Name"
                floatingLabelText="Supplier Name"
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
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormSupplierDetail;