import actionTypes from '../actions/actionType'

const initState = [
    {
        id: 1,
        title: 'Apple',
        price: 2222.28,
        count: 10

    },
    {
        id: 2,
        title: 'Orange',
        price: 333.28,
        count: 40

    }
]

export default (state = initState, action) => {
    console.log(action, state)
    switch (action.type) {
        case actionTypes.CART_AMOUNT_INCREATENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count += 1
                }
                return item
            })
        case actionTypes.CART_AMOUNT_DECREATENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count -= 1
                }
                return item
            })
        default:
            return state
    }

}