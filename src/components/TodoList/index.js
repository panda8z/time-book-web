import React, { Component } from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <ul>
                {this.props.todos.map((item, index, list) => {
                    return (<TodoItem
                        key={index + ''}
                        {...item}
                    />);
                })}
            </ul>
        );
    }
}
