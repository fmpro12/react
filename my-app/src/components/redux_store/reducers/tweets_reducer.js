import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from '../actions/gettweets';
  
  const initialState = {
    tweets: [],
    loading: false,
    error: null
  };
  
  export function tweetsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:

        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:

        return {
          ...state,
          loading: false,
          tweets: action.payload.tweets
        };
  
      case FETCH_PRODUCTS_FAILURE:

        return {
          ...state,
          loading: false,
          error: action.payload.error,
          tweets: []
        };
  
      default:

        return state;
    }
  }