import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {logo} = this.props;
        return (
            <div className="dash-nav dash-nav-dark">
                <header>
                    <a href="#!" className="menu-toggle">
                        <i className="fas fa-bars"></i>
                    </a>
                    <a href={logo.innerLink} className="spur-logo"> 
                        { logo ? (
                        <img
                            alt={logo.imgAlt}
                            className="logo"
                            src={logo.imgSrc}
                        />
                        ) : null }
                        <span>Dolphin</span>
                    </a>
                </header>
                <div className="dash-nav-list">
                    <a href="index.html" className="dash-nav-item">
                        <i className="fas fa-home"></i> Dashboard </a>
                    <UncontrolledDropdown className="dash-nav-dropdown">
                        <DropdownToggle className="dash-nav-item dash-nav-dropdown-toggle">
                            <i className="fas fa-chart-bar"></i> Charts </DropdownToggle>
                        <DropdownMenu className="dash-nav-dropdown-menu">
                            <DropdownItem href="chartjs.html" className="dash-nav-dropdown-item">Chart.js</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="dash-nav-dropdown ">
                        <DropdownToggle className="dash-nav-item dash-nav-dropdown-toggle"><i className="fas fa-cube"></i> Components </DropdownToggle>
                        <DropdownMenu className="dash-nav-dropdown-menu">
                            <DropdownItem href="cards.html" className="dash-nav-dropdown-item">Cards</DropdownItem>
                            <DropdownItem href="forms.html" className="dash-nav-dropdown-item">Forms</DropdownItem>
                            <DropdownItem href="stats.html" className="dash-nav-dropdown-item">Stats</DropdownItem>
                            <DropdownItem href="tables.html" className="dash-nav-dropdown-item">Tables</DropdownItem>
                            <DropdownItem href="typography.html" className="dash-nav-dropdown-item">Typography</DropdownItem>
                            <DropdownItem href="userinterface.html" className="dash-nav-dropdown-item">User Interface</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="dash-nav-dropdown">
                        <DropdownToggle href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                            <i className="fas fa-file"></i> Layouts </DropdownToggle>
                        <DropdownMenu className="dash-nav-dropdown-menu">
                            <DropdownItem href="blank.html" className="dash-nav-dropdown-item">Blank</DropdownItem>
                            <DropdownItem href="content.html" className="dash-nav-dropdown-item">Content</DropdownItem>
                            <DropdownItem href="login.html" className="dash-nav-dropdown-item">Log in</DropdownItem>
                            <DropdownItem href="signup.html" className="dash-nav-dropdown-item">Sign up</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="dash-nav-dropdown">
                        <DropdownToggle href="#!" className="dash-nav-item dash-nav-dropdown-toggle">
                            <i className="fas fa-info"></i> About </DropdownToggle>
                        <DropdownMenu className="dash-nav-dropdown-menu">
                            <DropdownItem href="https://github.com/CorradoRossi/dolphin-admin" target="_blank" className="dash-nav-dropdown-item">GitHub</DropdownItem>
                            <DropdownItem href="https://motorossi.me" target="_blank" className="dash-nav-dropdown-item">MotoRossi</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
        );
    }
}

export default Sidebar;