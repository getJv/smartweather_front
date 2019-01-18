import React, { Component } from 'react';
import SearchInputComponent from './SearchInputComponent';
import $ from 'jquery';
import PubSub from 'pubsub-js';

const URL_API = "http://localhost:8080/weather/";

export default class SearchFormComponent extends Component {



    constructor() {
        super();
        this.state = { querySearch: "" };
        this.sentForm = this.sentForm.bind(this);
        this.setQueryString = this.setQueryString.bind(this);
        this.getApiData = this.getApiData.bind(this);

    }

    getApiData() {
        $.ajax({
            url: URL_API + this.state.querySearch,
            dataType: 'json',
            success: newWeatherData => PubSub.publish('newWeatherDataStream', newWeatherData),
            error: err => console.log(err)
        });
    }

    sentForm(event) {
        event.preventDefault();
        this.getApiData()

    }

    setQueryString(event) {
        this.setState({ querySearch: event.target.value })
    }



    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.sentForm} method="post">
                    <SearchInputComponent
                        id="location"
                        placeholder="What is your location?"
                        type="text"
                        name="location"
                        value={this.state.querySearch}
                        onChange={this.setQueryString}
                    />
                </form>

            </div>

        );
    }


}