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
                    <h1 className="dash-title">Tables</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-table"></i>
                                    </div>
                                    <div className="spur-card-title">Default table</div>
                                </div>
                                <div className="card-body ">
                                    <table className="table table-in-card">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-table"></i>
                                    </div>
                                    <div className="spur-card-title">Table with hover</div>
                                </div>
                                <div className="card-body ">
                                    <table className="table table-hover table-in-card">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-table"></i>
                                    </div>
                                    <div className="spur-card-title">Striped table</div>
                                </div>
                                <div className="card-body ">
                                    <table className="table table-striped table-in-card">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-table"></i>
                                    </div>
                                    <div className="spur-card-title">Dark table</div>
                                </div>
                                <div className="card-body card-body-with-dark-table">
                                    <table className="table table-dark table-in-card">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
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