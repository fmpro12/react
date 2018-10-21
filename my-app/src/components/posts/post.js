import React, { Component } from 'react'
// import {Post_reducer, createPost} from '../reducers/post_reducer'
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './post.css'



class Posts extends Component {
    showPost() {
        return this.props.posts.map((post) => {
            return (
                <div>
                    <img src={post.img} className="images" alt="" />
                    <br />
                    <article key={post.id}>{post.title}</article>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.showPost()}
            </div>
        )
    }
}

function mapStateToProps (state) {
    // console.log(state)
    return {
        posts: state.posts
    }
}

 export default connect(mapStateToProps)(Posts);

