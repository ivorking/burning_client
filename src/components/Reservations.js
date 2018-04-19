import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RESERVATIONS_URL = 'http://localhost:3333/reservations.json';

class ReservationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {  name: '',
                        user_id: '',
                        date: '',
                        flight_id: '',
                        row: '',
                        colum: ''};   
        this._handleName = this._handleName.bind(this); 
        this._handleUserId = this._handleUserId.bind(this);
        this._handleDate = this._handleDate.bind(this); 
        this._handleFlightId = this._handleFlightId.bind(this);
        this._handleRow = this._handleRow.bind(this);
        this._handleColumn = this._handleColumn.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleName(e) {
        this.setState( { name: e.target.value } );
    }

    _handleUserId(e) {
        this.setState( { userid: e.target.value } );
    }

    _handleDate(e) {
        this.setState( { date: e.target.value } );
    }

    _handleFlightId(e) {
        this.setState( { flightid: e.target.value } );
    }

    _handleRow(e) {
        this.setState( { row: e.target.value } );
    }

    _handleColumn(e) {
        this.setState( { column: e.target.value } );
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.userid, this.state.date, this.state.flightid, this.state.row, this.state.column);
        // this.setState( {name: e, date: e, flight: e, row: e, column: e} );
        // name: '', flight_id: '', row: '', column: ''});
    }

    render () {
        return (
            <div className="reservation">
                <form onSubmit={ this._handleSubmit }>
                    <br />
                    <input type="text" placeholder="Name" onChange={this._handleName} value={this.state.name} />
                    <input type="integer" placeholder="UserId" onChange={this._handleUserId} value={this.state.userid} />
                    <input type="date" onChange={this._handleDate} value={this.state.date} />
                    <input type="integer" placeholder="FlightId" onChange={this._handleFlightId} value={this.state.flightid} />
                    <input type="integer" placeholder="Row" onChange={this._handleRow} value={this.state.row} />
                    <input type="integer" placeholder="Column" onChange={this._handleColumn} value={this.state.column} />
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
            axios.get(RESERVATIONS_URL).then( results => this.setState( { reservation: results.data }));
            console.log(this.state.reservation);
            console.log("fetching now");
        }

        // const fetchReservation = () => { 
        //     axios.get(RESERVATIONS_URL).then( results => this.setState( { reservations: results.data } ) );
        //     console.log("fetching now");

        //     setTimeout(fetchReservation, 4000);
        // }

        fetchReservation();
    }

    saveReservation(s1, s2, s3, s4, s5, s6) {
        console.log("posting now", s1, s2, s3, s4, s5, s6);
        s1 = +s1;
        s2 = +s2;
        s4 = +s4;
        s5 = +s5;
        s6 = +s6;
        axios.post(RESERVATIONS_URL, {name: s1, user_id: s2, date: s3, flightid: s4, row: s5, column: s6}).then((results) => {
            this.setState( { reservation: [results.data, ...this.state.reservation] } );
        });
        console.log(this.state.reservation);
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