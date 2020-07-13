import React, { Component } from 'react';
import { TodoHeader, TodoInput, TodoList } from './components';

// 函数式组件 ，是无状态组件，因为他们有state 没有办法在组件内部自己修改自己。所以也叫它受控组件。
// 类组件，是有状态组件，因为他有 props 和state 来接管外部通信和内部状态。

export default class App extends Component {

    // state 是组件本身的内部状态
    // props 是组件间通信用的

    constructor(props) {
        super(props) // 使用 constructor 一定要调用super(props)
        this.state = {
            title: '待办事项',
            desc: '今日事今日必',
            todos: [
                {
                    id: 1,
                    title: '吃饭',
                    isCompleted: true
                },
                {
                    id: 2,
                    title: '睡觉',
                    isCompleted: false
                },
            ]
        }
    }
    render() {
        console.log(this.props)
        return (<>

            {/* 渲染todos 数组 */}
            {this.state.todos.map((item, index, list) => {
                return (<div key={index+''}>
                    {item.title}
                </div>);
            })}
            {/* <TodoHeader desc={this.state.desc} x={1} y={2}>
                {this.state.title}
            </TodoHeader>
            <TodoInput />
            <TodoList /> */}
        </>);
    }
}


