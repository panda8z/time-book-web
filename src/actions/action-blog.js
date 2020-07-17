import actionTypes from './actionType'
import { getPosts } from '../services'

const startLoadingPosts = () => {
    return {
        type: actionTypes.START_LOADING_POSTS
    }
}
const loadingPostsSuccess = (payload) => {
    return {
        type: actionTypes.POSTS_LOADING_SUCCESS,
        payload
    }
}
const loadingPostsFail = (payload) => {
    return {
        type: actionTypes.POSTS_LOADING_FAIL,
        payload
    }
}

export const loadingBlogList = () => dispatch => {
    dispatch(startLoadingPosts())
    getPosts()
        .then(ret => {
            console.log('action ret', ret)
            if (ret.status === 200) {
                dispatch(loadingPostsSuccess({
                    list: ret.data
                }))
            } else {
                dispatch(loadingPostsFail())
            }
        })
        .catch(err => {
            console.log(err)
        })

}

