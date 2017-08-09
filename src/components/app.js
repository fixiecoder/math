import React, { Component } from 'react';
import Toolbar from '../containers/toolbar';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Toolbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
