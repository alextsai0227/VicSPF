import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'; 
import Profile from './components/Profile';
import FormStepper from './components/FormStepper';
import './App.css';
import history from './history';

function App() {
    return (
      <div className='App'>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path='/signup' render={() => <SignUp history={history}/>} />
            <Route exact path='/login' render={() => <LogIn />} />
            <Route exact path='/form' render={() => <FormStepper />} />
            <Route exact path='/profile' render={() => <Profile />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

export default App;
