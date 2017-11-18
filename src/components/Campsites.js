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
        let searchDuration = Moment.duration(searchEndDate.diff(searchStartDate)).asDays();
        debugger;
        // Get all gap rule values together
        let gapRules = this.props.gapRules;

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
                        // Start gap is gap between reservation endDate and start of search startDate
                        let startGap = resEndToSearchStart;

                        // End gap is gap between search endDate and reservation startDate
                        let endGap = searchEndtoResStart;

                        let isStartGapInvalid = (startGap < 0 && Math.abs(startGap) < searchDuration);
                        let isEndGapInvalid = (endGap < 0 && Math.abs(endGap) < searchDuration)
                        let isGapSize = (startGap === rule.gapSize || endGap === rule.gapSize);

                        if (isStartGapInvalid || isEndGapInvalid || isGapSize) {
                            isReservationValid = false;
                        }
                    }
                    return isReservationValid;
            });

            if (!(validReservations.length < campsiteReservations.length)) {
                campsiteReservations.push({
                    startDate: this.props.search.startDate,
                    endDate: this.props.search.endDate,
                    campsiteId: campsite.id,
                    searchQuery: true
                });

                // Create function to sort query in right place of reservations
                function sortByStartDate(a,b) {
                    if (a.startDate < b.startDate) {
                        return -1;
                    }
                    if (a.startDate > b.startDate) {
                        return 1;
                    }
                    return 0;
                }

                campsiteReservations.sort(sortByStartDate);
            }

            // Create DOM structure using Reservations component
            return (
                <div key={campsite.id} className="campsite-container">
                    <div className="campsite-name">
                        <span>
                            {campsite.name}
                        </span>
                    </div>
                    <Reservations
                        dateFormat={this.props.dateFormat}
                        reservations={campsiteReservations}
                        />
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
