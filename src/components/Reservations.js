import React, { Component } from 'react';
import Moment from 'moment';

class Reservations extends Component {
    render() {
        let reservations = this.props.reservations
            .map(reservation => {
                return (
                    <div className={"reservation-dates " + (reservation.searchQuery ? 'search-query-reservation' : '')} >
                        <span>
                            {Moment(reservation.startDate).format(this.props.dateFormat)} -
                            {Moment(reservation.endDate).format(this.props.dateFormat)}
                        </span>
                    </div>
                );
            });


        return (
            <div key="1" className="campsite-reservations" >
                {reservations}
            </div>
        );
    }
}

export default Reservations;
