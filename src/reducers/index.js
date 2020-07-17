import { combineReducers } from "redux";

import cart from './reducer-cart'
import blog from './reducer-blog'

export default combineReducers({
    cart,
    blog
})