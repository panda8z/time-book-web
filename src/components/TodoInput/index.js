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


    render() {
        return (
            <div>
                <input type='text' /><button>{this.props.btnText}</button>
            </div>
        );
    }
}
