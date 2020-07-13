import React, { Component} from 'react';
import {TodoHeader, TodoInput,TodoList }from './components';

export default class App extends Component {
  render() {
    console.log(this.props)
    return (<>
       <TodoHeader desc="今日事今日必">
       Todo事项
       </TodoHeader>
       <TodoInput btnText="Add"/>
       <TodoList/>
    </>);
  }
}


