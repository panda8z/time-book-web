// 在react中使用ref必须先导入 createRef 方法。
import React, { Component, createRef } from 'react';

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
        this.inputDom = createRef()

        this.state = {
            inputValue: 'xxx',
        }
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.currentTarget.value })
    }

    handleAddClick() {
        if (this.state.inputValue != '' && this.state.inputValue.length > 0) {
            this.props.addTodo(this.state.inputValue)
            this.setState({ inputValue: '' }, () => {
                this.inputDom.current.focus()
            })
        }
    }

    handleKeyup(e) {
        if (e.keyCode === 13) {
            this.handleAddClick()
        }
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                    onKeyUp={this.handleKeyup.bind(this)}
                    ref={this.inputDom}
                />
                <button
                    onClick={this.handleAddClick.bind(this)}
                >{this.props.btnText}</button>
            </div>
        );
    }
}
