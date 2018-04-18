import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';


//const AIRPLANES_URL = 'http://localhost:3000/airplanes.json';

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

function Gallery(props) {
  return (
    <div>
      <p>Coming Soon</p>
    </div>
  )
}

class Flights extends Component {
  render(){
    return(
      <div>
        <h2>Flights</h2>
        <FlightsForm />
        <Gallery />
        </div>
    );
  }
}

export default Flights;
