import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

class AuthLayout extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
            </div>
        );
    }
}

export default AuthLayout;