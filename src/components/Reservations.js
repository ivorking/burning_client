import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

class Reservation extends Component {
    constructor(props) {
        super(props);
    }

    _handleInput(e) {
        this.setState( {query: e.target.value} );
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit( this.state.query );
      }

    render () {
        return (
            <div className="reservation"/>
            <form onSubmit={ this._handleSubmit }>
                <input type="search" placeholder="Butterfly" onInput={ this._handleInput }/>
                <input type="submit" value="Search" />
            </form>
        );
    }
}

export default Reservation;