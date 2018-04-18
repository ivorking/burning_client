import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { content: ''};
        this._handleChange = this._handleChange.bind(this); //check react console secrets form state.
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState( {query: e.target.value} );
      }
    
    _handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.content);
        this.setState({content: ''});
    }

    render () {
        return (
            <div className="reservation">
                <form onSubmit={ this._handleSubmit }>
                    <br />
                    <input type="text" placeholder="Name" onChange={this._handleChange} value={this.state.content} />
                    <input type="date" onChange={this._handleChange} value={this.state.content} />
                    <input type="text" placeholder="Origin" onChange={this._handleChange} value={this.state.content} />
                    <input type="text" placeholder="Destination" onChange={this._handleChange} value={this.state.content} />
                    <input type="submit" value="Create Reservation" />
                </form>
            </div>            
        );
    }
}

export default Reservation;