import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3333/reservations.json';

class ReservationForm extends Component {

    constructor(props) {
        super(props);
        this.state = { content: '' };
        this._handleChange = this._handleChange.bind(this); 
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState( {content: e.target.value} );
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

ReservationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

class Reservation extends Component {

    constructor(props) {
        super(props);
        this.state = { reservations: [] };
        this.saveReservation = this.saveReservation.bind(this);

        const fetchReservation = () => { 
            axios.get(SERVER_URL).then( results => this.setState( { reservations: results.data } ) );
            setTimeout(fetchReservation, 4000);
        }

        fetchReservation();
    }

    saveReservation(s) {
        axios.post(SERVER_URL, {content: s}).then((results) => {
            this.setState( { reservations: [results.data, ...this.state.reservations] } );
        });
    }

    render() {
        return (
            <div>
                <h1>Enter your reservation</h1>
                <ReservationForm onSubmit={this.saveReservation} />
            </div>
        );
    };
}

export default Reservation;