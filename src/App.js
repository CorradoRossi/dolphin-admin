import React, { Component } from 'react';
import Main from './Components/Main';
import Toolbar from './Components/Toolbar';
import Sidebar from './Components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">      
        <Sidebar />
        <div className="dash-app">
          <Toolbar />
          <Main />      
        </div>
        <script src=".assets/js/dolphin.js"></script>
      </div>
    );
  }
}

export default App;
