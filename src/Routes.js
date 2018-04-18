import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Airplanes from './components/Airplanes';
import Flights from './components/Flights';
import Users from './components/Users';
import Reservations from './components/Reservations';
// import Reservations from './components/Reservations';

const Routes = (
  <Router>
    <div>
      <Route exact path = "/" component={ Home } />
      <Route exact path = "/Airplanes" component = { Airplanes } />
      <Route exact path = "/Flights" component = { Flights } />
      <Route exact path = "/Users" component = { Users } />
      <Route exact path = "/Reservations" component = { Reservations } />
     

    </div>
  </Router>
);

export default Routes;
