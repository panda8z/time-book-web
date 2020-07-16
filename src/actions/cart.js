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

export {
    increament,
    decreament
}