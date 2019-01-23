import React, { Component } from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import PubSub from 'pubsub-js';

export default class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { points: [-15.78, -47.92] };
    }

    handleMarkerClick = ({ event, payload, anchor }) => {
        console.log(`Marker #${payload} clicked at: `, anchor)
    }


    componentWillMount() {
        PubSub.subscribe('newWeatherDataStream', (stream, data) => {

            if (data.location)
                this.setState({ points: [data.location.lat, data.location.lon] });



        });

    }

    render() {



        return (
            <div className="pure-g">
                <div className="pure-u-1" >
                    <Map center={this.state.points}
                        zoom={12}
                        height={150}>
                        <Marker anchor={this.state.points} payload={1} onClick={this.handleMarkerClick} />
                    </Map>

                    {}

                </div>
            </div >
        );
    }


}


