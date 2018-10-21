import React, { Component } from 'react'
// import {Post_reducer, createPost} from '../reducers/post_reducer'
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'




class FollowersRedux extends Component {
    showFollow() {
        return this.props.followers.map((unit) => {
            return (
                <div className="followers_flex">
                <br />
                 <img src={unit.img} className="icons_followers" alt="" />
                    <article
                     className="followers_redux"
                     key={unit.id}>
                    {unit.name}
                    <br />
                    <button className="EdgeButton1">
                    <span className="follow_button">follow</span>
                    </button>
                    </article>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.showFollow()}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        followers: state.followers
    }
}

 export default connect(mapStateToProps)(FollowersRedux);

