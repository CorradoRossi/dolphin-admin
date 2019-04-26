import React, {Component} from 'react';

class Toolbar extends Component {
    render() {
        return (
            <header className="dash-toolbar">
                <a href="#!" className="menu-toggle">
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
                    <a href="https://github.com/HackerThemes/spur-template" target="_blank" className="tools-item">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#!" className="tools-item">
                        <i className="fas fa-bell"></i>
                        <i className="tools-item-count">4</i>
                    </a>
                    <div className="dropdown tools-item">
                        <a href="#" className="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <a className="dropdown-item" href="#!">Profile</a>
                            <a className="dropdown-item" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Toolbar