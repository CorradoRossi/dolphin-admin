import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Bar, Line, Doughnut, Polar} from 'react-chartjs-2';

//core components
import Sidebar from '../components/Sidebar.jsx';
import Toolbar from '../components/Toolbar.jsx';

import routes from '../routes';

class ChartsPage extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/home') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  }

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  render() {
    return (
      <div className={ this.state.condition ? "App dash-compact" : "App dash"}>      
        <Sidebar 
          {...this.props}
          className={ this.state.condition ? "dash-nav dash-nav-dark" : "mobile-show dash-nav-dark" }
          toggleClassName={ this.handleClick }
          routes={routes}
          logo={{
            innerLink: '/home',
            imgSrc: require('../assets/img/logo.svg'),
            imgAlt: 'Dolphin'
          }}
        />
        <div className="dash-app" ref="mainContent">
          <Toolbar 
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
            toggleClassName={ this.handleClick }
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <main class="dash-content">
                <div class="container-fluid">
                    <h1 class="dash-title">Chart.js</h1>
                    <p class="mb-5"> These charts are made using the Chart.js library. You can find more examples and ways to configure the charts in the <a href="http://chartjs.org" target="_blank">Chart.js Documentation</a>. </p>
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Two bars </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="card-body spur-card-body-chart">
                                        <Bar data={{
                                            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                            datasets: [{
                                                label: 'Blue',
                                                data: [12, 19, 3, 5, 4],
                                                backgroundColor: '#3F84FC',
                                                borderColor: 'transparent'
                                            }, {
                                                label: 'Red',
                                                data: [6, 12, 11, 3, 14],
                                                backgroundColor: '#FC0D1B',
                                                borderColor: 'transparent'
                                            }]
                                        }} />                      
                                    </div>
                                </div>
                            </div>
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Doughnut </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body spur-card-body-chart">
                                    <Doughnut data={{
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        datasets: [{
                                            label: 'Week',
                                            data: [12, 19, 3, 5, 2],
                                            backgroundColor: [
                                                '#30A54A',
                                                '#3F84FC',
                                                '#FC0D1B',
                                                '#9B2FAE',
                                                '#9ED7F5'
                                            ],
                                            borderColor: '#fff',
                                            fill: false
                                        }]
                                    }} />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Line </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body spur-card-body-chart">
                                    <Line data={{
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        datasets: [{
                                            label: 'Blue',
                                            data: [12, 19, 3, 5, 2],
                                            backgroundColor: '#3F84FC',
                                            borderColor: '#3F84FC',
                                            fill: false
                                        }, {
                                            label: 'Red',
                                            data: [4, 12, 11, 2, 14],
                                            backgroundColor: 'red',
                                            borderColor: 'red',
                                            fill: false
                                        }]
                                    }} /> 
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Polar Area </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body spur-card-body-chart">
                                    <Polar data={{
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        datasets: [{
                                            label: 'Week',
                                            data: [12, 19, 3, 5, 2],
                                            backgroundColor: [
                                                '#9ED7F5',
                                                '#3F84FC',
                                                '#30A54A',
                                                '#9B2FAE',
                                                '#FC0D1B'
                                            ],
                                            borderColor: '#fff'
                                        }]
                                    }} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>     
        </div>
      </div>
    );
  }
}

export default ChartsPage;