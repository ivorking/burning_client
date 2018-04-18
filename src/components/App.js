import React, { Component } from 'react';
import Airplanes from './Airplanes';
import Flights from './Flights';
import Home from './Home';


class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>Burning Airlines</h1>
        <Airplanes />
        <Flights />

      </div>
    );
  }
}

export default App;
