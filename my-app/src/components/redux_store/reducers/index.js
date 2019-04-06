import {combineReducers} from 'redux'
import {post_reducer} from './create_post'
import {productReducer} from './fetch_followers'
import {productReducerMessage} from './fetch_messages'
import { tweetsReducer } from './tweets_reducer'


const allReducers = combineReducers ({
    messages: post_reducer,
    fetched: productReducer,
    modal_messages: productReducerMessage,
    tweets: tweetsReducer
})

export default  allReducers;