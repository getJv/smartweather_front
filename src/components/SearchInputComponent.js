import React, { Component } from 'react';


export default class SearchInputComponent extends Component{

    render() {
        return (
            <div className="pure-control-group">
                <input
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }


}