import React, {Component} from 'react';
import Header from './Header';
import Navsection from './Navsection';

class Sidebar extends Component {
    render() {
        return (
            <div className="dash-nav dash-nav-dark">
                <Header />
                <Navsection />
            </div>
        );
    }
}

export default Sidebar;