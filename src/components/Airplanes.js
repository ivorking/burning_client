import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const AIRPLANES_URL = 'http://localhost:3000/airplanes.json';



class CreateAirplaneForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '',
                   rows: '',
                   columns: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e){
    // this.setState( { name: e.target.value,
    //                  rows: e.target.value,
    //                  columns: e.target.columns} );
    console.log(e.target.name);
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state);
    // debugger;
    this.setState({name: '', rows: '', columns: ''});
  }

  render(){
    return (
      <div>
        <h3>Create new Airplane</h3>
        <form onSubmit = {this._handleSubmit}>
          <label>Name:</label>
          <input type="text"
                 name="name"
                 onChange = {this._handleChange}></input>

          <label>Rows:</label>
          <input type="number"
                 name="rows"
                 onChange = {this._handleChange}></input>

          <label>Columns:</label>
          <input type="number"
                 name="columns"
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
