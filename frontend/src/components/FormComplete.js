import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Complete extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h2>Submitted Successfully!</h2>
          <p>You can track the progress in your profile.</p>
          <Link to='/profile'>Back to profile</Link>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Complete;