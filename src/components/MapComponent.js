import React, { Component } from 'react';
import SearchFormComponent from './SearchFormComponent';
import PubSub from 'pubsub-js';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

class MapComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            center: [50.879, 4.6997],
            zoom: 12
        }
    }

    handleMarkerClick = ({ event, payload, anchor }) => {
        console.log(`Marker #${payload} clicked at: `, anchor)
    }

    render() {
        const { center, zoom } = this.state


        return (
            <div className="pure-g">
                <div className="pure-u-1" >
                    <Map center={center}
                        zoom={zoom}
                        height={150}>
                        <Marker anchor={[50.879, 4.6997]} payload={1} onClick={this.handleMarkerClick} />
                    </Map>
                    {console.log(this.props.locationPoints.location)}
                    {this.props.locationPoints.location.name}
                </div>
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
            <div > 
                <SearchFormComponent />
                <MapComponent locationPoints={this.state.wheatherData} />
                
            </div>
        );
    }


}