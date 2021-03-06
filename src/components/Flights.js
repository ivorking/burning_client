import React, { PureComponent as Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'



const FLIGHTS_URL = 'http://localhost:3333/flights.json';

class FlightForm extends Component {
  constructor(props) {
      super(props);
      this.state = { flightTime: '',
                      source: '',
                      destination: ''
    };
      this._handleFlightTimeChange = this._handleFlightTimeChange.bind(this);
      this._handleSourceChange = this._handleSourceChange.bind(this);
      this._handleDestinationChange = this._handleDestinationChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleFlightTimeChange(e) {
    this.setState({flightTime: e.target.value});
  }

  _handleSourceChange(e) {
    this.setState({source: e.target.value});
  }

  _handleDestinationChange(e) {
    this.setState({destination: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.flightTime, this.state.source, this.state.destination);
    this.setState({ flightTime: '', source: '', destination: ''})
  }
  // this.setState({flightTime: '', source: '', destination: ''});
  // Clear the input

  render() {
    return (
      <div>
        <h2>Create Flights</h2>
        <form onSubmit={this._handleSubmit}>
          <input type="date" onChange={this._handleFlightTimeChange} value={this.state.flightTime} />
          <input type="text" placeholder="Origin" onChange={this._handleSourceChange} value={this.state.source} />
          <input type="text" placeholder="Destination" onChange={this._handleDestinationChange} value={this.state.destination} />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

FlightForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
// { props.flights.map( s => <p key={ s.id }>{ s.id } { s.flightTime } { s.source } { s.destination } {s.airplane_id}</p> ) }

function Gallery (props) {
  return (

    <div>
    <h2>All Flights</h2>
    { props.flights.map( (f) => <p key={ f.id }>{ f.flightTime } { f.source } { f.destination } {f.airplane_id} <button><Link to={`/reservations/`}>Reservations</Link></button></p> ) }
    </div>
  )
}

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = { flights: [] };
    this.saveFlights = this.saveFlights.bind(this);

    const fetchFlights = () => {
      axios.get(FLIGHTS_URL).then( results => this.setState ({flights: results.data}));
    }

    fetchFlights();
  }

  saveFlights(f) {
    console.log(f);

    axios.post(FLIGHTS_URL, {flightTime: f, source: f, origin: f}).then((results) => {
      this.setState( { flights: [results.data, ...this.state.flights] } );
    });
  }

  render(){
    return(
      <div>
        <h2>Flights</h2>
        <FlightForm onSubmit={this.saveFlights}/>
        <Gallery flights={this.state.flights} />
        </div>
    );
  }
}

// class SearchFlightForm extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { flightTime: '',
//                       source: '',
//                       destination: ''
//     };
//       this._handleFlightTimeChange = this._handleFlightTimeChange.bind(this);
//       this._handleSourceChange = this._handleSourceChange.bind(this);
//       this._handleDestinationChange = this._handleDestinationChange.bind(this);
//       this._handleSubmit = this._handleSubmit.bind(this);
//     }
//     _handleFlightTimeChange(e) {
//     this.setState({flightTime: e.target.value});
//   }
//
//   _handleSourceChange(e) {
//     this.setState({source: e.target.value});
//   }
//
//   _handleDestinationChange(e) {
//     this.setState({destination: e.target.value});
//   }
//
//   _handleSubmit(e) {
//     e.preventDefault();
//     this.props.onSubmit(this.state.flightTime, this.state.source, this.state.destination);
//     this.setState({ flightTime: '', source: '', destination: ''})
//   }
//
// render() {
//     return (
//       <div>
//         <h2>Search Flights</h2>
//         <form onSubmit={this._handleSubmit}>
//           <input type="date" onChange={this._handleFlightTimeChange} value={this.state.flightTime} />
//           <input type="text" placeholder="Origin" onChange={this._handleSourceChange} value={this.state.source} />
//           <input type="text" placeholder="Destination" onChange={this._handleDestinationChange} value={this.state.destination} />
//           <input type="submit" value="Search" />
//         </form>
//       </div>
//     );
//   }
// }
//
// SearchFlightForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }
//
// function Gallery (props) {
//   return (
//
//     <div>
//     <h2>All Flights</h2>
//     { props.flights.map( (f) => <p key={ f.id }>{ f.id } { f.flightTime } { f.source } { f.destination } {f.airplane_id}</p> ) }
//     </div>
//   )
// }

export default Flights;
