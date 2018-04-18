import React, { Component } from 'react';
import Airplanes from './Airplanes';
import Home from './Home';


class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>Burning Airlines</h1>
        <Airplanes />
        
      </div>
    );
  }
}

export default App;
