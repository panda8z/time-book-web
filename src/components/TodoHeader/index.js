import React from 'react';

import PropTypes from 'prop-types'

export default function TodoHeader(props) {

    return (<div>
        <h1> {props.title} </h1>
        <p>{props.desc}</p>
    </div>);
}

// 不仅可以检查参数类型 ，还可以检测是否是必须的。
TodoHeader.propTypes = {
    desc: PropTypes.string,
}