import React, { Component} from 'react';
import {TodoHeader, TodoInput,TodoList }from './components';

export default class App extends Component {
  render() {
    console.log(this.props)
    return (<>
       <TodoHeader/>
       <TodoInput/>
       <TodoList/>
    </>);
  }
}


