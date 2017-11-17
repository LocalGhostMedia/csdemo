import React, { Component } from 'react';
import Reservations from './Reservations.js';
import Moment from 'moment';

class Campsites extends Component {

    componentDidMount() {
    }

    render() {
        // Convert search query params to moments
        let searchStartDate = Moment(this.props.search.startDate);
        let searchEndDate = Moment(this.props.search.endDate);

        // Get all gap rule values together
        let gapRules = Object.values(this.props.gapRules);

        // Map all campsites to return HTML structure and create reservation components.
        let campsites = this.props.campsites
            .map(campsite => {

            // Get all reservations with this campsite id
            let campsiteReservations = this.props.reservations
                .filter(reservation => reservation.campsiteId === campsite.id);

            // Find all valid campsite reservations for each campsite based on search and gapRules
            let validReservations = campsiteReservations
                .filter(reservation => {
                    let resStartDate = Moment(reservation.startDate);
                    let resEndDate = Moment(reservation.endDate);
                    let resEndToSearchStart = Moment.duration(searchStartDate.diff(resEndDate)).asDays();
                    let searchEndtoResStart = Moment.duration(resStartDate.diff(searchEndDate)).asDays();
                    let isReservationValid = true;
                    for (let rule of gapRules) {
                        let startGap = resEndToSearchStart;
                        let endGap = searchEndtoResStart;
                        if (startGap < 0 || startGap === rule.gapSize) {
                            isReservationValid = false;
                        }
                    }
                    return isReservationValid;
            });

            // Create DOM structure using Reservations component
            return (
                <div key={campsite.id} className="campsite-container">
                    <div className="campsite-name">
                        <span>
                            {campsite.name}
                        </span>
                    </div>
                    <Reservations dateFormat={this.props.dateFormat} reservations={campsiteReservations} />
                </div>
            )
        });

        return (
            <div className="campsites-container">
                {campsites}
            </div>
        );
    }
}

export default Campsites;
