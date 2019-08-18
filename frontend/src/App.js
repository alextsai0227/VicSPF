import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'; 
import Profile from './components/Profile';
import FormStepper from './components/FormStepper';
import './App.css';

function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/api/users" component={SignUp} />
            <Route exact path='/signup' render={() => <SignUp />} />
            <Route exact path='/login' render={() => <LogIn />} />
            <Route exact path='/form' render={() => <FormStepper />} />
            <Route exact path='/profile' render={() => <Profile />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

export default App;
