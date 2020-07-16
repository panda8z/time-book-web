import React, { Component } from 'react'

import { increament, decreament } from '../../actions/cart'

export default class CartList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cartList: []
        }
    }

    getState() {
        this.setState({
            cartList: this.props.store.getState().cart
        })
    }

    componentDidMount() {
        this.getState()
        this.props.store.subscribe(this.getState.bind(this))
    }

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
                    {this.props.store.getState().cart.map(item => {
                        return (<tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={
                                    () => {
                                        this.props.store.dispatch(decreament(item.id))
                                    }}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => {
                                    this.props.store.dispatch(increament(item.id))
                                }}>+</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        )
    }
}
