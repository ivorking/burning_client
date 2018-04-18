import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RESERVATIONS_URL = 'http://localhost:3333/reservations.json';

class ReservationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {  content: '' },
                        // flight_id: '',
                        // row: '',
                        // colum: ''};   
        this._handleChange = this._handleChange.bind(this); 
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState( { content: e.target.value } );
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.content);
        this.setState( {content: ''});
        // name: '', flight_id: '', row: '', column: ''});
    }

    render () {
        return (
            <div className="reservation">
                <form onSubmit={ this._handleSubmit }>
                    <br />
                    <input type="text" placeholder="Name" onChange={this._handleChange} value={this.state.content} />
                    {/* <input type="date" onChange={this._handleChange} value={this.state.date} />
                    <input type="text" placeholder="Flight" onChange={this._handleChange} value={this.state.flight} /> */}
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
        // console.log(content);
        this.saveReservation = this.saveReservation.bind(this);
        // this.fetchReservation = this.fetchReservation.bind(this);

        const fetchReservation = () => { 
            axios.get(RESERVATIONS_URL).then( results => this.setState( { reservations: results.data } ) );
            console.log("fetching now");

            setTimeout(fetchReservation, 4000);
        }

        fetchReservation();
    }

    saveReservation(s) {
        console.log("posting now");
        axios.post(RESERVATIONS_URL, {content: s}).then((results) => {
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