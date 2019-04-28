import React from 'react';
import {UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header className="dash-toolbar">
                <a href="#!" className="menu-toggle" onClick={ this.props.toggleClassName }>
                    <i className="fas fa-bars"></i>
                </a>
                <a href="#!" className="searchbox-toggle">
                    <i className="fas fa-search"></i>
                </a>
                <form className="searchbox" action="#!">
                    <a href="#!" className="searchbox-toggle"> <i className="fas fa-arrow-left"></i> </a>
                    <button type="submit" className="searchbox-submit"> <i className="fas fa-search"></i> </button>
                    <input type="text" className="searchbox-input" placeholder="type to search"></input>
                </form>
                <div className="tools">
                    <a href="https://github.com/corradorossi/dolphin-admin" target="_blank" className="tools-item">
                        <i className="fab fa-github"></i>
                    </a>
                    <UncontrolledDropdown className="dropdown tools-item">
                        <DropdownToggle href="#" className="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell"></i>
                            <i className="tools-item-count">4</i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <DropdownItem className="dropdown-item" href="/admin/profile">Notification 1</DropdownItem>
                            <DropdownItem className="dropdown-item" href="/auth/login">Notification 2</DropdownItem>
                            <DropdownItem className="dropdown-item" href="/admin/profile">Notification 3</DropdownItem>
                            <DropdownItem className="dropdown-item" href="/auth/login">Notification 4</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="dropdown tools-item">
                        <DropdownToggle href="#" className="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <DropdownItem className="dropdown-item" href="/admin/profile">Profile</DropdownItem>
                            <DropdownItem className="dropdown-item" href="/auth/login">Login</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </header>
        );
    }
}

export default Toolbar