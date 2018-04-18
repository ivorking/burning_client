import React, { Component } from 'react';
import Airplanes from './Airplanes';
import Users from './Users';
import Reservations from './Reservations';
import Flights from './Flights';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Burning Airlines</h1>
        <Airplanes />
        <Flights />
        <Users />
        <Reservations />
      </div>
    );
  }
}

export default App;
