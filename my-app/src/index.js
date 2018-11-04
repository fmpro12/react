import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.scss';
import thunkMiddleware from 'redux-thunk'
import App from './App';
import allReducers from './components/redux_store/reducers/index'
import registerServiceWorker from './registerServiceWorker'

const loggerMiddleware = createLogger()

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();