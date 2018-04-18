import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3001/flights.json';

class FlightsForm extends Component {
  constructor(props) {
      super(props);
      this.state = { content: ''};
      this._handleChange = this._handleChange.bind(this); //check react console secrets form state.
      this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
    // Clear the input
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="date" onChange={this._handleChange} value={this.state.content} />
          <input type="text" placeholder="Origin" onChange={this._handleChange} value={this.state.content} />
          <input type="text" placeholder="Destination" onChange={this._handleChange} value={this.state.content} />
          <input type="submit" value="Create Flight" />
        </form>
      </div>
    );
  }
}

// FlightsForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }
// { props.flights.map( s => <p key={ s.id }>{ s.id } { s.flightDate } { s.source } { s.destination } {s.airplane_id}</p> ) }

function Gallery (props) {
  return (

    <div>
    <p>
    { props.flights.map( s => <p key={ s.id }>{ s.id } { s.flightDate } { s.source } { s.destination } {s.airplane_id}</p> ) }
    </p>
    </div>
  )
}

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = { flights: [] };
    this.saveFlight = this.saveFlight.bind(this);

    const fetchFlights = () => {
      axios.get(FLIGHTS_URL).then( results => this.setState ({flightss: results.data}));
    }

    fetchFlights();
  }

  saveFlight(s) {
    console.log(s);

    axios.post(FLIGHTS_URL, {content: s}).then((results) => {
      this.setState( { flights: [results.data, ...this.state.flights] } );
    });
  }

  render(){
    return(
      <div>
        <h2>Flights</h2>
        <FlightsForm />
        <Gallery flights={this.state.flights} />
        </div>
    );
  }
}

export default Flights;
