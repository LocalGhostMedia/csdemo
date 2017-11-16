import React, { Component } from 'react';
import Campsites from './Campsites.js';

class MainView extends Component {

    render() {
        return (
            <div className="campgrounds-container">
                <Campsites />
            </div>
        );
    }
}

export default MainView;
