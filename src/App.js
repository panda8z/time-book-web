import React, { Component , Fragment} from 'react';
import {TodoHeader, TodoInput,TodoList }from './components';

export default class App extends Component {
  render() {
    console.log(this.props)
    return (<Fragment className='body'>
       <TodoHeader/>
       <TodoInput/>
       <TodoList/>
    </Fragment>);
  }
}


