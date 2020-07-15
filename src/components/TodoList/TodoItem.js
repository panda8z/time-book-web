import React, { Component } from 'react';

export default class TodoItem extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleChange() {
        this.setState({ isCompleted: !this.state.isCompleted }, () => {
            this.props.onCompletedChange(this.props.id)
        })
    }
    render() {
        return (
            <li>
                <input
                    type='checkbox'
                    onChange={this.handleChange.bind(this)}
                    checked={this.props.isCompleted}
                />
                <span>
                    {/* 这部分语句就是模板，进来的数据props就是数据，不同的数据同样的样式模板。这就是模板渲染。 */}
                    {
                        this.props.title + " " + (this.props.isCompleted ? '已完成✅' : '未完成❎')
                    }
                </span>
            </li>
        );
    }
}
