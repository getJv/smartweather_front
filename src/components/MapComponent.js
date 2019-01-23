import React, { Component } from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

export default class MapComponent extends Component {

   

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


