import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
          {
              this.props.title  + this.props.isCompeleted ? '已完成✅' : '未完成❎'
          }
      </li>
    );
  }
}
