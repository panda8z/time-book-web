import React from 'react'

import ReactDOM from 'react-dom'

// 这是一个箭头函数定义的方法。
const createApp = (props) => { 
    return <div>
    <h1>Welcom!</h1>
    {/* jsx里面的js代码用 {} 包裹 */}
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