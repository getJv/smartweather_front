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
                <input className="pure-input-1"
                    required 
                    {...this.props}
                />
                <span className="error">{this.state.errorMessage}</span>
            </div>
        );
    }

    componentDidMount(){

        PubSub.subscribe('errorValidationStream',function(stream,err){
            this.setState({errorMessage:err.message});
        }.bind(this));   
        
        PubSub.subscribe('cleanerStream',function(stream){
            this.setState({errorMessage:''});
        }.bind(this));    
        

    }


}