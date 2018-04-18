import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const AIRPLANES_URL = 'http://localhost:3001/airplanes.json';

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

function Gallery(props){
  return(
    <div>
      {props.airplanes.map(s => <p key={s.id}>{s.content}</p>)}
    </div>
  )
}

class ShowAirplanes extends Component {


}

class Airplanes extends Component {
  constructor(props){
    super(props);
    this.state={airplanes: []};

    const fetchAirplanes = () => {
      axios.get(SERVER_URL).then(results => this.setState({airplanes: results.data}));
      setTimeout(fetchAirplanes, 4000);
    }

    fetchAirplanes();
  }

  createAirplane(query){
    console.log('Creating: ', query);
  }

  render(){
    return(
      <div>
        <h2>Airplanes</h2>
        <Gallery airplanes = {this.state.airplanes}/>
      </div>
    );
  }
}

export default Airplanes;
