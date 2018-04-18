import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this); //check react console secrets form state.
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInput(e) {
        this.setState( {query: e.target.value} );
      }
    
    _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
    }

    render () {
        return (
            <div className="reservation"/>
            <form onSubmit={ this._handleSubmit }>
                <input type="date" onChange={this._handleChange} value={this.state.content} />
                <input type="text" placeholder="Origin" onChange={this._handleChange} value={this.state.content} />
                <input type="text" placeholder="Destination" onChange={this._handleChange} value={this.state.content} />
                <input type="submit" value="Create Flight" />
            </form>
        );
    }
}

export default Reservation;