import React from 'react';
import { Route, Switch } from 'react-router-dom';

//core components
import Sidebar from '../components/Sidebar.jsx';
import Toolbar from '../components/Toolbar.jsx';

import routes from '../routes';

class CardsPage extends React.Component {
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
                    <h1 className="dash-title">Cards</h1>
                    <p className="mb-5">Cards are simply Bootstrap cards with some added features for the dashboard environment.</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header ">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> A card </div>
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
                                <div className="card-body "> Just a card that can be used to display some content, graphs, tables, and so on. </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header bg-primary text-white">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Primary Header </div>
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
                                <div className="card-body "> Just a card that can be used to display some content, graphs, tables, and so on. </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header bg-success text-white">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Success </div>
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
                                <div className="card-body "> Just a card that can be used to display some content, graphs, tables, and so on. </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header bg-danger text-white">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Danger Header </div>
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
                                <div className="card-body "> Just a card that can be used to display some content, graphs, tables, and so on. </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header bg-warning text-dark">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Warning Card </div>
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
                                <div className="card-body bg-warning text-dark"> Just a card that can be used to display some content, graphs, tables, and so on. </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header bg-dark text-white">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Dark Card </div>
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
                                <div className="card-body bg-dark text-white"> Just a card that can be used to display some content, graphs, tables, and so on. </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header bg-secondary text-white">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Secondary Card </div>
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
                                <div className="card-body bg-secondary text-white"> Just a card that can be used to display some content, graphs, tables, and so on. </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header bg-info text-white">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Info Card </div>
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
                                <div className="card-body bg-info text-white"> Just a card that can be used to display some content, graphs, tables, and so on. </div>
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

export default CardsPage;