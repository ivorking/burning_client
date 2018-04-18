import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

//const AIRPLANES_URL = 'http://localhost:3000/airplanes.json';

class AirplaneForm extends Component {
  render(){
    return (

      <h3>Airplane Form </h3>
    )
  }
}

class AirplanesForm extends Component {
  render(){
    return(
      <div>
        <h2>Airplanes</h2>
        <AirplaneForm />
      </div>
    );
  }
}

export default AirplaneForm;
