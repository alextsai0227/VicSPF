import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'; 
import Profile from './components/Profile';
import FormStepper from './components/FormStepper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/signup' render={() => <SignUp />} />
          <Route exact path='/login' render={() => <LogIn />} />
          <Route exact path='/form' render={() => <FormStepper />} />
          <Route exact path='/profile' render={() => <Profile />} />
        </Switch>
      </div>
    );
  }
}

export default App;
