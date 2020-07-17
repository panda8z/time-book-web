import actionTypes from '../actions/actionType'
const initState = {
    list: [],
    isLoading: true
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.START_LOADING_POSTS:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.POSTS_LOADING_SUCCESS:
            console.log('reducer state=', state, 'action =', action)
            return {
                ...state,
                isLoading: false,
                list: action.payload.list,
                testSucess: 'a'
            };
        case actionTypes.POSTS_LOADING_FAIL:
            console.log('reducer state=', state)
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}