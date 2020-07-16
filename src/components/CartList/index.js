import React, { Component } from 'react'

import { increament, decreament } from '../../actions/cart'

export default class CartList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.store.getState().cart.cart.map(item => {
                        return (<tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={
                                    () => {
                                        this.props.store.dispatch(increament('jian'))
                                    }}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => {
                                    this.props.store.dispatch(increament('jia'))
                                }}>+</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        )
    }
}
