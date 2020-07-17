
import React, { Component } from 'react'

import BlogItem from './BlogItem'

import { connect } from 'react-redux'

import { loadingBlogList } from '../../actions/action-blog'

class BlogList extends Component {

    componentDidMount() {
        this.props.loadingBlogList()
    }
    render() {
        // getPosts().then(ret => { console.log('ret =', ret) })
        console.log('props:', this.props)
        return (
            this.props.isLoading
                ?
                <div>Loading</div>
                :
                <ul>
                    {this.props.blogList.map(item => {
                        return <BlogItem key={item.id} {...item} />
                    })}

                </ul>
        )
    }
}

const mapState = (state) => {
    console.log('mapState state:', state)
    return {
        blogList: state.blog.list,
        isLoading: state.blog.isLoading
    }
}
export default connect(mapState, { loadingBlogList })(BlogList)