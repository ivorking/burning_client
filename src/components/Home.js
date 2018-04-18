import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Burning Airlines homepage</h2>
        <ul>
          <li><a href="/#/airplanes">Airplanes</a></li>
          <li><a href="/#/flights">Flights</a></li>
          <li><a href="/#/users">Users</a></li>
          <li><a href="/#/reservations">Reservations</a></li>
        </ul>
      </div>
    )
  }
}

export default Home;
