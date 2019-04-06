export function fetchTweets(id) {
    return dispatch => {
      dispatch(fetchProductsBegin(id));
      return fetch(id)
          .then(handleErrors)
          .then(res => res.json()
          .then(console.log(res)))
          .then(json => {
            dispatch(fetchProductsSuccess(json));
            return json;
          })
          .catch(error => dispatch(fetchProductsError(error)));
      };
    }
        
 
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  
  export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
  export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
  export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
  
  export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  export const fetchProductsSuccess = tweets => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { tweets }
  });
  
  export const fetchProductsError = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });