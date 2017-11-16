import React, { Component } from 'react';

class Campsite extends Component {

    render() {
        return (
            <div className="campsite-inner">
                <div className="campsite-name">
                    {this.props.campsite.name}
                </div>
            </div>
        );
    }
}

export default Campsite;
