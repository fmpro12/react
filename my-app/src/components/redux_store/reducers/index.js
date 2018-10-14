import {combineReducers} from 'redux'
import feed from './feeds'
import {post_reducer} from './create_post'
import followers from './followers_reducer'


const allReducers = combineReducers ({
    posts: feed,
    messages: post_reducer,
    followers: followers
})

export default  allReducers;