import React, { Component } from 'react'

import { increament, decreament } from '../../actions/cart'

import { connect } from 'react-redux'

class CartList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cartList: []
        }
    }

    render() {
        console.log('cartList props', this.props)
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
                    {this.props.cartList.map(item => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={
                                    () => {
                                        this.props.decreament(item.id)
                                    }}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => {
                                    this.props.increament(item.id)
                                }}>+</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        )
    }
}

function mapState(state) {
    console.log('state=', state)
    return { cartList: state.cart }
}
export default connect(mapState, { increament, decreament })(CartList)