import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="toolbar">
          <button onClick={this.props.logout}>Log out</button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
