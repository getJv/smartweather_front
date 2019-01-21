import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class SearchInputComponent extends Component{

    constructor(){
        super();
        this.state = {errorMessage:''};
    }



    render() {
        return (
            <div className="pure-control-group">
                <input
                    required
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <span className="error">{this.state.errorMessage}</span>
            </div>
        );
    }

    componentDidMount(){

        PubSub.subscribe('errorValidationStream',(stream,err)=>{
            this.setState({errorMessage:err.defaultMessage});
            console.log("componentDidMount from SearchInputComponent"+ this.state.errorMessage);
        });

    }


}