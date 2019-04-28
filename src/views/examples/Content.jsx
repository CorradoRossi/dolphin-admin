import React from 'react';
import { Route, Switch } from 'react-router-dom';

//core components
import Sidebar from '../../components/Sidebar.jsx';
import Toolbar from '../../components/Toolbar.jsx';

import routes from '../../routes';

class Content extends React.Component {
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
            imgSrc: require('../../assets/img/logo.svg'),
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
                    <div class="row">
                        <div class="col-xl-10">
                            <h1 class="dash-title">A simple content page</h1>
                            <h3 id="my-section-1" class="content-anchor">My first content section <a href="#my-section-1" class="content-anchor-link"><i class="fas fa-link"></i></a></h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <h3 id="my-section-2" class="content-anchor">My second content section <a href="#my-section-2" class="content-anchor-link"><i class="fas fa-link"></i></a></h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aut cupiditate debitis delectus dicta dolor et fugit neque nesciunt, nihil nulla, quisquam reiciendis rerum, sapiente sit. Aliquid, ex? </p>
                        </div>
                    </div>
                </div>
            </main>     
        </div>
      </div>
    );
  }
}

export default Content;