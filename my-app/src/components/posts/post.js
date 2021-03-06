import React, { Component } from 'react'
// import {Post_reducer, createPost} from '../reducers/post_reducer'
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './post.scss'



class Posts extends Component {
    showPost() {
        return this.props.posts.map((post) => {
            return (
                <div className='feed_main'>
                    <article
                     key={post.id}
                     >{post.title}
                     </article>
                    <br />
                    <img src={post.img} className="images" alt="" />
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

