import React, { Component } from 'react';

import TodoItem from './TodoItem';

import PropTypes from 'prop-types'

export default class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })),
        onCompletedChange: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((item, index, list) => {
                    return (<TodoItem
                        onCompletedChange={this.props.onCompletedChange}
                        key={index + ''}
                        {...item}
                    />);
                })}
            </ul>
        );
    }
}
