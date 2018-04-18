import React, { Component } from 'react';
import Airplanes from './Airplanes';
<<<<<<< HEAD
import Users from './Users';
import Reservations from './Reservations';
import Flights from './Flights';
=======
import Home from './Home';


>>>>>>> 828bc736adc8fd4efa8e9f8b7b0736767cc7bf94

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
        <Users />
        <Reservations />
      </div>
    );
  }
}

export default App;
