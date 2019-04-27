import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './assets/scss/dolphin.scss';
import AdminLayout from './layouts/Admin.jsx';
import AuthLayout from './layouts/Auth.jsx';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/home" render={props => <AdminLayout {...props} />} />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Redirect from="/" to="/home/index" />
        </Switch>
    </BrowserRouter>,
document.getElementById('root')
);

//import * as serviceWorker from './serviceWorker';
//serviceWorker.unregister();
