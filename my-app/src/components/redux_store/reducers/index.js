import {combineReducers} from 'redux'
import feed from './feeds'
import {post_reducer} from './create_post'
import followers from './followers_reducer'
import {productReducer} from './fetch_followers'


const allReducers = combineReducers ({
    posts: feed,
    messages: post_reducer,
    followers: followers,
    fetched: productReducer
})

export default  allReducers;