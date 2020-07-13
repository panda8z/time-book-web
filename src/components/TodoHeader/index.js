import React, { Component } from 'react';

export default class TodoHeader extends Component {

    render() {
        return (<div>
            <h1> {this.props.children} </h1>
            <p>{this.props.desc}</p>
        </div>);
    }
}
