import React from 'react'

import {render} from 'react-dom'


class App extends React.Component {

    render() {
        console.log(this.props)
        return (<div class='body'>
            <Header headerTitle="Headddder"/>
            <h1>Welcom!</h1>
            {/* jsx里面的js代码用 {} 包裹 */}
            <p>{this.props.title}</p>
        </div>)
    }
}

class Header extends React.Component {
    render() {
        return (<div class='header'>
                <h2>I`m Header of this!</h2>
    <p>{this.props.headerTitle}</p>
        </div>)
    }
}

render(
    <App title='React 16.8'/>,
    document.querySelector('#root')
)