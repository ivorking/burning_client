import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Airplanes from './components/Airplanes';
import Flights from './components/Flights';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path = "/Airplanes" component = { Airplanes } />
      <Route exact path = "/Flights" component = { Flights } />
    </div>
  </Router>
);

export default Routes;
