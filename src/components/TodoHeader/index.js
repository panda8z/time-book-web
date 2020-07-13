import React from 'react';

import PropTypes from 'prop-types'

export default function TodoHeader(props) {

    return (<div>
        <h1> {props.children} </h1>
        <p>{props.desc}</p>
        <p>{props.x + props.y}</p>
    </div>);
}

TodoHeader.propTypes ={
    desc: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}