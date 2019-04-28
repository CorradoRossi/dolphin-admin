import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './assets/scss/dolphin.scss';
import AdminLayout from './layouts/Admin.jsx';
import AuthLayout from './layouts/Auth.jsx';
import ChartsPage from './views/ChartsPage';
import Content from './views/examples/Content';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/dolphin-admin/home" render={props => <AdminLayout {...props} />} />
            <Route path="/dolphin-admin/auth" render={props => <AuthLayout {...props} />} />
            <Route path="/dolphin-admin/charts" render={props => <ChartsPage {...props} />} />
            <Route path="/dolphin-admin/content" render={props => <Content {...props} />} />
            <Redirect from="/" to="/dolphin-admin/home" />
        </Switch>
    </BrowserRouter>,
document.getElementById('root')
);

//import * as serviceWorker from './serviceWorker';
//serviceWorker.unregister();
