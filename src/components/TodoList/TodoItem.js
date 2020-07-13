import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
          {/* 这部分语句就是模板，进来的数据props就是数据，不同的数据同样的样式模板。这就是模板渲染。 */}
          {
              this.props.title  + this.props.isCompeleted ? '已完成✅' : '未完成❎'
          }
      </li>
    );
  }
}
