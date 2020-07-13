import React from 'react'

import ReactDOM from 'react-dom'

const createApp = (props) => {
    return <div>
    <h1>Welcom!</h1>
    <p>{props.title}</p>
</div>
}

const app = createApp({ 
    title: "React 16.8"
})
ReactDOM.render(
    app,
    document.querySelector('#root')
)