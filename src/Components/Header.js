import React, {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (

            <header>
                <a href="#!" className="menu-toggle">
                    <i className="fas fa-bars"></i>
                </a>
                <a href="index.html" className="spur-logo"><img src={logo} className="logo"/> <span>Dolphin</span></a>
            </header>
        );
    }
}

export default Header;