import {combineReducers} from 'redux'
import feed from './feeds'
import {post_reducer} from './create_post'
import {productReducer} from './fetch_followers'
import {productReducerMessage} from './fetch_messages'


const allReducers = combineReducers ({
    posts: feed,
    messages: post_reducer,
    fetched: productReducer,
    modal_messages: productReducerMessage
})

export default  allReducers;