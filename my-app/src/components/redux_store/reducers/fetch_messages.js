import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from '../actions/actionFetchMessages';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export function productReducerMessage(state = initialState, action) {
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
          items: action.payload.messages
        };
  
      case FETCH_PRODUCTS_FAILURE:

        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:

        return state;
    }
  }