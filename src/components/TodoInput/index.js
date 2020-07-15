import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class TodoInput extends Component {

    //静态类型检查
    static propsTypes = {
        btnText: PropTypes.string
    }

    // 可以给属性设置默认值
    static defaultProps = {
        btnText: '添加Todo'
    }

    constructor(props) {
        super(props)

        this.state = {
            inputValue: 'xxx',
        }
    }

    handleInputChange(e) {
        console.log(e.currentTarget)
        this.setState({ inputValue: e.currentTarget.value })
    }

    handleAddClick() {
       if(this.state.inputValue != '' && this.state.inputValue.length > 0) {
           this.props.addTodo(this.state.inputValue)
       }
    }


    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                <button
                    onClick={this.handleAddClick.bind(this)}
                >{this.props.btnText}</button>
            </div>
        );
    }
}
