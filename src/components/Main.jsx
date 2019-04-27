import React from 'react';
import Charts from './Charts/Charts.jsx'; 

class Main extends React.Component {

    render() {

        return (
            <main className="dash-content">
                <div className="container-fluid">
                    <div className="row dash-row">
                        <div className="col-xl-4">
                            <div className="stats stats-primary">
                                <h3 className="stats-title"> Sign ups </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">114</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+25%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="stats stats-success ">
                                <h3 className="stats-title"> Revenue </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$25,541</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="stats stats-danger">
                                <h3 className="stats-title"> Open tickets </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Bar Chart </div>
                                    <div className="spur-card-menu">
                                        <div className="dropdown show">
                                            <a className="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Charts />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-bell"></i>
                                    </div>
                                    <div className="spur-card-title"> Notifications </div>
                                </div>
                                <div className="card-body ">
                                    <div className="notifications">
                                        <a href="#!" className="notification">
                                            <div className="notification-icon">
                                                <i className="fas fa-inbox"></i>
                                            </div>
                                            <div className="notification-text">New comment</div>
                                            <span className="notification-time">21 days ago</span>
                                        </a>
                                        <a href="#!" className="notification">
                                            <div className="notification-icon">
                                                <i className="fas fa-inbox"></i>
                                            </div>
                                            <div className="notification-text">New comment</div>
                                            <span className="notification-time">21 days ago</span>
                                        </a>
                                        <a href="#!" className="notification">
                                            <div className="notification-icon">
                                                <i className="fas fa-inbox"></i>
                                            </div>
                                            <div className="notification-text">New comment</div>
                                            <span className="notification-time">21 days ago</span>
                                        </a>
                                        <div className="notifications-show-all">
                                            <a href="#!">Show all</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main