import React, { Component } from 'react';
import Campsites from './Campsites.js';
import Moment from 'moment';
import CampData from '../data/test-case.json';

class MainView extends Component {
    constructor() {
        super();
        // Create state of application from json data
        this.state = {
            campsites: CampData.campsites,
            gapRules: CampData.gapRules,
            reservations: CampData.reservations,
            search: CampData.search,
            dateFormat: 'MMM Do'
        }
    }
    render() {
        return (
            <div>
                <div className="search-query">
                    <span>
                        Search: {Moment(this.state.search.startDate).format(this.state.dateFormat)} - {Moment(this.state.search.endDate).format(this.state.dateFormat)}
                    </span>
                </div>
                <div className="campgrounds-container">
                    <Campsites
                        campsites={this.state.campsites}
                        dateFormat={this.state.dateFormat}
                        gapRules={this.state.gapRules}
                        reservations={this.state.reservations}
                        search={this.state.search}
                        />
                </div>
            </div>
        );
    }
}

export default MainView;
