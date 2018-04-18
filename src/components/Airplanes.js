import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const AIRPLANES_URL = 'http://localhost:3001/airplanes.json';

// IK changed "name" to "ship" to reflect postgres column names

class CreateAirplaneForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ship: '',
                   rows: '',
                   columns: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e){
    // console.log(e.target.name);
    this.setState({[e.target.ship]: e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state);
    // debugger;
    this.setState({ship: '', rows: '', columns: ''});
  }

  render(){
    return (
      <div>
        <h3>Create new Airplane</h3>
        <form onSubmit = {this._handleSubmit}>
          <label>Name:</label>
          <input type="text"
                 ship="ship"
                 onChange = {this._handleChange}></input>

          <label>Rows:</label>
          <input type="number"
                 rows="rows"
                 onChange = {this._handleChange}></input>

          <label>Columns:</label>
          <input type="number"
                 columns="columns"
                 onChange = {this._handleChange}></input>

          <input type="submit" value="Create"/>
        </form>
      </div>
    );
  }
}

class Airplanes extends Component {

  createAirplane(query){
    console.log('Creating: ', query);
  }

  render(){
    return(
      <div>
        <h2>Airplanes</h2>
        <CreateAirplaneForm onSubmit = {this.createAirplane}/>
      </div>
    );
  }
}

export default Airplanes;
