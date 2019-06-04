import React, { Component } from 'react'
import {fetchPosts} from '../actions/postAction'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

 class Post extends Component {
     componentDidMount() {
         // 请求列表数据
         this.props.fetchPosts();
     }

     componentWillReceiveProps(nextProps){
         if(nextProps.newPost){
             console.log(nextProps.newPost)
             this.props.posts.unshift(nextProps.newPost);         
            }
     }
    render() {
        const postItem = this.props.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
            <h1>Post</h1>
            {postItem}
            </div>
        )
    }
}

Post.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}

const mapStateToProps = state => ({

    posts:state.posts.items,
    newPost:state.posts.item // formPost 中添加的数据
})

export default connect(mapStateToProps,{fetchPosts})(Post);
