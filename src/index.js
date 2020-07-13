import React from 'react'

import { render } from 'react-dom'

import classNames from 'classnames'

import './index.css'

class App extends React.Component {

    render() {
        console.log(this.props)
        return (<div className='body'>
            <Header headerTitle="Headddder" />
            <h1>Welcom!</h1>
            {/* jsx里面的js代码用 {} 包裹 */}
            <p>{this.props.title}</p>

            <ol>
                <li style={{ color: '#f00', fontSize: '24px' }}>使用内联style属性定义样式</li>
                <li className="has-text-red">使用class + css类选择器定义属性 class要写成className</li>
                <li className={classNames('a',{'b':true}, {'c': false})}>使用classnames第三方库实现动态使用不同的class + css类选择器定义属性 class要写成className<br/>本例子中class应该只有a，b没有c</li>
            </ol>
        </div>)
    }
}

class Header extends React.Component {
    render() {
        return (<div className='header'>
            <h2>I`m Header of this!</h2>
            <p>{this.props.headerTitle}</p>
        </div>)
    }
}

render(
    <App title='React 16.8' />,
    document.querySelector('#root')
)