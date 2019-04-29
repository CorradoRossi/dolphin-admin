import React from 'react';
import { Route, Switch } from 'react-router-dom';

//core components
import Sidebar from '../components/Sidebar.jsx';
import Toolbar from '../components/Toolbar.jsx';
import Main from '../components/Main.jsx';

import routes from '../routes';

class Index extends React.Component {
  componentDidUpdate(e) {
    //
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

  render() {
    return (
      <div className="App dash">      
        <Sidebar 
          {...this.props}
          routes={routes}
          logo={{
            innerLink: '/home',
            imgSrc: require('../assets/img/logo.svg'),
            imgAlt: 'Dolphin'
          }}
        />
        <div className="dash-app" ref="mainContent">
          <Toolbar />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Main />      
        </div>
      </div>
    );
  }
}

export default Index;