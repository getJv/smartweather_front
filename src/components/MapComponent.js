import React, { Component } from 'react';
import SearchFormComponent from './SearchFormComponent';
import PubSub from 'pubsub-js';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

class MapComponent extends Component {

   

    handleMarkerClick = ({ event, payload, anchor }) => {
        console.log(`Marker #${payload} clicked at: `, anchor)
    }

    render() {
       


        return (
            <div className="pure-g">
                <div className="pure-u-1" >
                    <Map center={this.props.points}
                        zoom={12}
                        height={150}>
                        <Marker anchor={this.props.points} payload={1} onClick={this.handleMarkerClick} />
                    </Map>
                
                    {}
                    
                </div>
            </div >
        );
    }


}

export default class WeatherBox extends Component {

    constructor() {
        super();
        this.state = { points:[50.879, 4.6997], wheatherData: {} };

    }

    componentWillMount() {
        PubSub.subscribe('newWeatherDataStream', (stream, data) => {
            
            if(data.location)
            this.setState({ points: [data.location.lat, data.location.lon], wheatherData: data });

        });
        
    }

    render() {
        return (
            <div > 
                <SearchFormComponent />
                <MapComponent points={this.state.points}  />
                
            </div>
        );
    }


}
