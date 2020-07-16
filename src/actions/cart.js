import actionTypes from './actionType'

const increament = (id) => {
    return {
        type: actionTypes.CART_AMOUNT_INCREATENT,
        payload: {
            id
        }
    }
}


const decreament = (id) => {
    return {
        type: actionTypes.CART_AMOUNT_DECREATENT,
        payload: {
            id
        }
    }
}
const decreamentAsync = id => dispatch => {
    return setTimeout(() => {
        dispatch({
            type: actionTypes.CART_AMOUNT_DECREATENT,
            payload: {
                id
            }
        })
    }, 2000);
}

export {
    increament,
    decreament,
    decreamentAsync
}