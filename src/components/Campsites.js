import React, { Component } from 'react';
import CampData from '../data/test-case.json';
import Campsite from './Campsite.js';

class Campsites extends Component {
    constructor() {
        super();
        this.state = {
            campsites: CampData.campsites,
            gapRules: CampData.gapRules,
            reservations: CampData.reservations,
            search: CampData.search
        }
    }

    componentDidMount() {
    }

    render() {
        let campsites = this.state.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="campsite-container">
                    <Campsite campsite={campsite} />
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
