import React from 'react'

import ReactDOM from 'react-dom'

// 这是一个箭头函数定义的方法。
const App = (props) => { 
    return (<div>
    <h1>Welcom!</h1>
    {/* jsx里面的js代码用 {} 包裹 */}
    <p>{props.title}</p>
</div>)
}

ReactDOM.render(
    <App title="React 16.8"/>,
    document.querySelector('#root')
)