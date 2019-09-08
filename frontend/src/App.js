import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
// import FormAboEmp from './components/FormAboEmp';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'; 
// import SupProfile from './components/SupProfile';
import FormStepper from './components/FormStepper';
import './App.css';
import FormSupplierDetail from './components/FormSupplierDetail';
import FormVerifierDetail from './components/FormVerifierDetail';

function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/emp' component={withRouter(FormAboEmp)} /> */}
            <Route exact path='/signup' component={withRouter(SignUp)} />
            <Route exact path='/login' component={withRouter(LogIn)} />
            <Route exact path='/form' component={withRouter(FormStepper)} />
            <Route exact path='/sup-profile' component={withRouter(FormSupplierDetail)} />  
            <Route exact path='/ver-profile' component={withRouter(FormVerifierDetail)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

export default App;
