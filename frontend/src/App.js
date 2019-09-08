import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'; 
import FormStepper from './components/FormStepper';
import './App.css';
import FormSupplierDetail from './components/FormSupplierDetail';

function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/signup' component={withRouter(SignUp)} />
            <Route exact path='/login' component={withRouter(LogIn)} />
            <Route exact path='/form' component={withRouter(FormStepper)} />
            <Route exact path='/profile' component={withRouter(FormSupplierDetail)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

export default App;
