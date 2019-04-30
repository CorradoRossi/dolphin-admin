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
                    <a href="#!" className="menu-toggle" onClick={this.props.toggleClassname}>
                        <i className="fas fa-bars"></i>
                    </a>
                    <a href={logo.innerLink} className="spur-logo"> 
                        { logo ? (
                        <img
                            className="logo"
                            src={logo.imgSrc}
                            alt={logo.imgAlt}
                        />
                        ) : null }
                        <span>Dolphin</span>
                    </a>
                </header>
                <div className="dash-nav-list">
                    <a href="#/" className="dash-nav-item">
                        <i className="fas fa-home"></i> Dashboard </a>
                    <UncontrolledDropdown className="dash-nav-dropdown">
                        <DropdownToggle className="dash-nav-item dash-nav-dropdown-toggle">
                            <i className="fas fa-chart-bar"></i> Charts </DropdownToggle>
                        <DropdownMenu className="dash-nav-dropdown-menu">
                            <DropdownItem href="#/charts" className="dash-nav-dropdown-item">Chart.js</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="dash-nav-dropdown ">
                        <DropdownToggle className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fas fa-cube"></i> Components </DropdownToggle>
                        <DropdownMenu className="dash-nav-dropdown-menu">
                            <DropdownItem href="#/cards" className="dash-nav-dropdown-item">Cards</DropdownItem>
                            <DropdownItem href="#/forms" className="dash-nav-dropdown-item">Forms</DropdownItem>
                            <DropdownItem href="#/stats" className="dash-nav-dropdown-item">Stats</DropdownItem>
                            <DropdownItem href="#/tables" className="dash-nav-dropdown-item">Tables</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="dash-nav-dropdown">
                        <DropdownToggle className="dash-nav-item dash-nav-dropdown-toggle">
                            <i className="fas fa-file"></i> Layouts </DropdownToggle>
                        <DropdownMenu className="dash-nav-dropdown-menu">
                            <DropdownItem href="#/blank" className="dash-nav-dropdown-item">Blank</DropdownItem>
                            <DropdownItem href="#/content" className="dash-nav-dropdown-item">Content</DropdownItem>
                            <DropdownItem href="#/auth" className="dash-nav-dropdown-item">Log in</DropdownItem>
                            <DropdownItem href="#/signup" className="dash-nav-dropdown-item">Sign up</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="dash-nav-dropdown">
                        <DropdownToggle className="dash-nav-item dash-nav-dropdown-toggle">
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