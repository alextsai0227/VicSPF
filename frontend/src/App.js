import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import SignUp from './components/SignUp';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
  	<BrowserRouter>
      <Route exact path="/api/users" component={SignUp} />    
    </BrowserRouter>
  );
}

export default App;
