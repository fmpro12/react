import {combineReducers} from 'redux'
import {post_reducer} from './create_post'
import {productReducerMessage} from './fetch_messages'
import { tweetsReducer } from './tweets_reducer'


const allReducers = combineReducers ({
    messages: post_reducer,   
    modal_messages: productReducerMessage,
    tweets: tweetsReducer
})

export default  allReducers;