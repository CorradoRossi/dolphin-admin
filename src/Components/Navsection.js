import React, {Component} from 'react';
import {Nav, Dropdown} from 'react-bootstrap';

class Navsection extends Component {
    render() {
        return (
            <Nav className="dash-nav-list">
                <a href="index.html" className="dash-nav-item">
                    <i className="fas fa-home"></i> Dashboard </a>
                <Dropdown className="dash-nav-dropdown">
                    <Dropdown.Toggle href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-chart-bar"></i> Charts </Dropdown.Toggle>
                    <Dropdown.Menu className="dash-nav-dropdown-menu">
                        <Dropdown.Item href="chartjs.html" className="dash-nav-dropdown-item">Chart.js</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="dash-nav-dropdown ">
                    <Dropdown.Toggle className="dash-nav-item dash-nav-dropdown-toggle"><i className="fas fa-cube"></i> Components </Dropdown.Toggle>
                    <Dropdown.Menu className="dash-nav-dropdown-menu">
                        <Dropdown.Item href="cards.html" className="dash-nav-dropdown-item">Cards</Dropdown.Item>
                        <Dropdown.Item href="forms.html" className="dash-nav-dropdown-item">Forms</Dropdown.Item>
                        <Dropdown.Menu className="dash-nav-dropdown ">
                            <Dropdown.Toggle href="#" className="dash-nav-dropdown-item dash-nav-dropdown-toggle">Icons</Dropdown.Toggle>
                            <Dropdown.Menu className="dash-nav-dropdown-menu">
                                <Dropdown.Item href="icons.html" className="dash-nav-dropdown-item">Solid Icons</Dropdown.Item>
                                <Dropdown.Item href="icons.html#regular-icons" className="dash-nav-dropdown-item">Regular Icons</Dropdown.Item>
                                <Dropdown.Item href="icons.html#brand-icons" className="dash-nav-dropdown-item">Brand Icons</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Menu>
                        <Dropdown.Item href="stats.html" className="dash-nav-dropdown-item">Stats</Dropdown.Item>
                        <Dropdown.Item href="tables.html" className="dash-nav-dropdown-item">Tables</Dropdown.Item>
                        <Dropdown.Item href="typography.html" className="dash-nav-dropdown-item">Typography</Dropdown.Item>
                        <Dropdown.Item href="userinterface.html" className="dash-nav-dropdown-item">User Interface</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="dash-nav-dropdown">
                    <Dropdown.Toggle href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-file"></i> Layouts </Dropdown.Toggle>
                    <Dropdown.Menu className="dash-nav-dropdown-menu">
                        <Dropdown.Item href="blank.html" className="dash-nav-dropdown-item">Blank</Dropdown.Item>
                        <Dropdown.Item href="content.html" className="dash-nav-dropdown-item">Content</Dropdown.Item>
                        <Dropdown.Item href="login.html" className="dash-nav-dropdown-item">Log in</Dropdown.Item>
                        <Dropdown.Item href="signup.html" className="dash-nav-dropdown-item">Sign up</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="dash-nav-dropdown">
                    <Dropdown.Toggle href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-info"></i> About </Dropdown.Toggle>
                    <Dropdown.Menu className="dash-nav-dropdown-menu">
                        <Dropdown.Item href="https://github.com/HackerThemes/spur-template" target="_blank" className="dash-nav-dropdown-item">GitHub</Dropdown.Item>
                        <Dropdown.Item href="http://hackerthemes.com" target="_blank" className="dash-nav-dropdown-item">HackerThemes</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        );
    }
}

export default Navsection