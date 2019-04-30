import React from 'react';
import { Route, Switch } from 'react-router-dom';

//core components
import Sidebar from '../components/Sidebar.jsx';
import Toolbar from '../components/Toolbar.jsx';

import routes from '../routes';

class TablesPage extends React.Component {
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
            innerLink: '/home/index',
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
          <main className="dash-content">
                <div className="container-fluid">
                    <h1 className="dash-title">Stats</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="stats stats-primary">
                                <h3 className="stats-title"> Primary </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stats stats-secondary">
                                <h3 className="stats-title"> Secondary </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stats stats-success">
                                <h3 className="stats-title"> Success </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stats stats-info">
                                <h3 className="stats-title"> Info </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stats stats-warning">
                                <h3 className="stats-title"> Warning </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stats stats-danger">
                                <h3 className="stats-title"> Danger </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stats stats-light">
                                <h3 className="stats-title"> Light </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="stats stats-dark">
                                <h3 className="stats-title"> Dark </h3>
                                <div className="stats-content">
                                    <div className="stats-icon">
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="stats-data">
                                        <div className="stats-number">$100</div>
                                        <div className="stats-change">
                                            <span className="stats-percentage">+17.5%</span>
                                            <span className="stats-timeframe">from last month</span>
                                        </div>
                                    </div>
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

export default TablesPage;