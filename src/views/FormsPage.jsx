import React from 'react';
import { Route, Switch } from 'react-router-dom';

//core components
import Sidebar from '../components/Sidebar.jsx';
import Toolbar from '../components/Toolbar.jsx';

import routes from '../routes';

class FormsPage extends React.Component {
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
          toggleclassName={ this.handleClick }
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
            toggleclassName={ this.handleClick }
          />
          <Switch>{this.getRoutes(routes)}</Switch>
            <main className="dash-content">
                <div className="container-fluid">
                    <h1 className="dash-title">Forms</h1>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Simple Form </div>
                                </div>
                                <div className="card-body ">
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Email address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect1">Example select</label>
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect2">Example multiple select</label>
                                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1">Example textarea</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Inline Form </div>
                                </div>
                                <div className="card-body ">
                                    <form className="form-inline">
                                        <div className="form-group mb-2">
                                            <label for="staticEmail2" className="sr-only">Email</label>
                                            <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                                        </div>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <label for="inputPassword2" className="sr-only">Password</label>
                                            <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
                                    </form>
                                </div>
                            </div>
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Horizontal Layout </div>
                                </div>
                                <div className="card-body ">
                                    <form>
                                        <div className="form-group row">
                                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                            </div>
                                        </div>
                                        <fieldset className="form-group">
                                            <div className="row">
                                                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                                <div className="col-sm-10">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" for="customRadio3">This choice seems interesting</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" for="customRadio4">This one rather outlandish</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className="form-group row">
                                            <div className="col-sm-2">Checkbox</div>
                                            <div className="col-sm-10">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card spur-card">
                                <div className="card-header">
                                    <div className="spur-card-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <div className="spur-card-title"> Complex layout </div>
                                </div>
                                <div className="card-body ">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Password</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputAddress">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div className="form-group">
                                            <label for="inputAddress2">Address 2</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="inputState">State</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label for="inputZip">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                <label className="custom-control-label" for="customCheck4">Check this custom checkbox</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </form>
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

export default FormsPage;