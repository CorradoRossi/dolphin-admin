import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';

class Navsection extends Component {
    render() {
        return (
            <Nav className="dash-nav-list">
                <a href="index.html" className="dash-nav-item">
                    <i className="fas fa-home"></i> Dashboard </a>
                <div className="dash-nav-dropdown">
                    <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-chart-bar"></i> Charts </a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="chartjs.html" className="dash-nav-dropdown-item">Chart.js</a>
                    </div>
                </div>
                <div className="dash-nav-dropdown ">
                    <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-cube"></i> Components </a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="cards.html" className="dash-nav-dropdown-item">Cards</a>
                        <a href="forms.html" className="dash-nav-dropdown-item">Forms</a>
                        <div className="dash-nav-dropdown ">
                            <a href="#" className="dash-nav-dropdown-item dash-nav-dropdown-toggle">Icons</a>
                            <div className="dash-nav-dropdown-menu">
                                <a href="icons.html" className="dash-nav-dropdown-item">Solid Icons</a>
                                <a href="icons.html#regular-icons" className="dash-nav-dropdown-item">Regular Icons</a>
                                <a href="icons.html#brand-icons" className="dash-nav-dropdown-item">Brand Icons</a>
                            </div>
                        </div>
                        <a href="stats.html" className="dash-nav-dropdown-item">Stats</a>
                        <a href="tables.html" className="dash-nav-dropdown-item">Tables</a>
                        <a href="typography.html" className="dash-nav-dropdown-item">Typography</a>
                        <a href="userinterface.html" className="dash-nav-dropdown-item">User Interface</a>
                    </div>
                </div>
                <div className="dash-nav-dropdown">
                    <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-file"></i> Layouts </a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="blank.html" className="dash-nav-dropdown-item">Blank</a>
                        <a href="content.html" className="dash-nav-dropdown-item">Content</a>
                        <a href="login.html" className="dash-nav-dropdown-item">Log in</a>
                        <a href="signup.html" className="dash-nav-dropdown-item">Sign up</a>
                    </div>
                </div>
                <div className="dash-nav-dropdown">
                    <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-info"></i> About </a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="https://github.com/HackerThemes/spur-template" target="_blank" className="dash-nav-dropdown-item">GitHub</a>
                        <a href="http://hackerthemes.com" target="_blank" className="dash-nav-dropdown-item">HackerThemes</a>
                    </div>
                </div>
            </Nav>
        );
    }
}

export default Navsection