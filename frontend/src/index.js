import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <MuiThemeProvider>
        <BrowserRouter>
            <App />
        </ BrowserRouter>
    </MuiThemeProvider>
), document.getElementById('root'));

// serviceWorker.unregister();