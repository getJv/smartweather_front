import React, { Component } from 'react';
import SearchFormComponent from './SearchFormComponent';
import MapComponent from './MapComponent';
import GridComponent from './GridComponent';

import PubSub from 'pubsub-js';


export default class WeatherBox extends Component {

    constructor() {
        super();
        this.state = {  weatherData: {} };

    }

    componentWillMount() {




        PubSub.subscribe('newWeatherDataStream', (stream, data) => {

            this.setState({ weatherData: data });
                

        });

    }

    componentDidMount(){
        PubSub.subscribe('cleanerStream',function(stream){
            this.setState({weatherData:{}});
        }.bind(this)); 
    }

    render() {
        return (
            <div >
                <SearchFormComponent />
                <MapComponent />
                { this.state.weatherData.forecast ?  <GridComponent data={this.state.weatherData} /> : null }
            


            </div>
        );
    }


}