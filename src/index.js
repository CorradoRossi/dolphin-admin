import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import './assets/scss/dolphin.scss';
import AdminLayout from './layouts/Admin.jsx';
import AuthLayout from './layouts/Auth.jsx';
import ChartsPage from './views/ChartsPage';
import Content from './views/examples/Content';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/home" render={props => <AdminLayout {...props} />} />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Route path="/charts" render={props => <ChartsPage {...props} />} />
            <Route path="/content" render={props => <Content {...props} />} />
            <Redirect from="/" to="/home" />
        </Switch>
    </HashRouter>,
document.getElementById('root')
);

//serviceWorker.unregister();
