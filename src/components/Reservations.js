import React, { Component } from 'react';
import Moment from 'moment';

class Reservations extends Component {
    render() {
        let reservations = this.props.reservations
            .map(reservation => {

                // Create guid for repeat elements
                let guid = Math.random() * 10000000;
                return (
                    <div key={guid} className={"reservation-dates " + (reservation.searchQuery ? 'search-query-reservation' : '')} >
                        <span>
                            {Moment(reservation.startDate).format(this.props.dateFormat)} -
                            {Moment(reservation.endDate).format(this.props.dateFormat)}
                        </span>
                    </div>
                );
            });

        // Render all reservations that were just mapped
        return (
            <div className="campsite-reservations" >
                {reservations}
            </div>
        );
    }
}

export default Reservations;
