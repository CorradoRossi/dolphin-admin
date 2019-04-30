import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import './assets/scss/dolphin.scss';

import AdminLayout from './layouts/Admin.jsx';
import AuthLayout from './layouts/Auth.jsx';
import Signup from './layouts/Signup.jsx';
import ChartsPage from './views/ChartsPage';
import FormsPage from './views/FormsPage';
import CardsPage from './views/CardsPage';
import StatsPage from './views/StatsPage';
import BlankPage from './views/BlankPage';
import TablesPage from './views/TablesPage';
import Content from './views/Content';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/home" render={props => <AdminLayout {...props} />} />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Route path="/signup" render={props => <Signup {...props} />} />
            <Route path="/charts" render={props => <ChartsPage {...props} />} />
            <Route path="/forms" render={props => <FormsPage {...props} />} />
            <Route path="/cards" render={props => <CardsPage {...props} />} />
            <Route path="/stats" render={props => <StatsPage {...props} />} />
            <Route path="/blank" render={props => <BlankPage {...props} />} />
            <Route path="/tables" render={props => <TablesPage {...props} />} />
            <Route path="/content" render={props => <Content {...props} />} />
            <Redirect from="/" to="/home" />
        </Switch>
    </HashRouter>,
document.getElementById('root')
);

//serviceWorker.unregister();
