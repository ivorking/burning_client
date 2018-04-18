import React, { Component } from 'react';
import Airplanes from './Airplanes';
import Home from './Home';


class App extends Component {
  render() {
    return (

      <div className="App">

        <ul>
          <li><a href="/airplanes">Airplanes</a></li>
          <li><a href="/flights">Flights</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/reservations">Reservations</a></li>
        </ul>

        <h1>Burning Airlines</h1>
        <Airplanes />
        <Flights />
      </div>
    );
  }
}

export default App;
