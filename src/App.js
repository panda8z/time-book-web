import React, { Component } from 'react';
import { TodoHeader, TodoInput, TodoList, Like } from './components';


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

    addTodo(todo) {
        this.setState({
            todos: this.state.todos.concat({
                id: this.state.todos.length + 1,
                title: todo,
                isCompleted: false
            })
        })
    }

    onCompletedChange(id) {
        // for (let index = 0; index < this.state.todos.length; index++) {
        //     const todo = this.state.todos[index];
        //     if (todo.id == id) {
        //         todo.isCompleted = !todo.isCompleted
        //     }
        // }
        // this.setState({todos: this.state.todos})

        this.setState((preState)=>{
            return {
                todos: preState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.isCompleted = !todo.isCompleted
                    }
                    return todo
                })
            }
        })
    }

    render() {
        return (<>
            <TodoHeader title={this.state.title} desc={this.state.desc} />
            <TodoInput addTodo={this.addTodo.bind(this)} />
            {/* 渲染todos 数组 */}
            <TodoList todos={this.state.todos} onCompletedChange={this.onCompletedChange.bind(this)} />
            <span><Like /></span>
        </>);
    }
}


