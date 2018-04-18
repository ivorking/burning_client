import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Airplanes from './components/Airplanes';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path = "/Airplanes" component = { Airplanes } />
    </div>
  </Router>
);

export default Routes;
