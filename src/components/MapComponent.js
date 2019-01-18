import React, { Component } from 'react';
import SearchFormComponent from './SearchFormComponent';
import PubSub from 'pubsub-js';

class MapComponent extends Component {



    render() {
        return (
            <div className="pure-form pure-form-aligned">
                {console.log("From maps")}{console.log(this.props.locationPoints)}
            </div >
        );
    }


}

export default class WeatherBox extends Component {

    constructor() {
        super();
        this.state = { wheatherData: {} };

    }

    componentDidMount() {
        PubSub.subscribe('newWeatherDataStream', (stream, data) => {
            this.setState({ wheatherData: data });

        });
    }

    render() {
        return (
            <span>
                <SearchFormComponent />
                <MapComponent locationPoints={this.state.wheatherData} />

            </span>
        );
    }


}