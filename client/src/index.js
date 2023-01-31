import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import reducers from './state/reducers'


//Creating a store
const store = createStore(reducers, compose(applyMiddleware(thunk)));



// wrap our application with provider component for redux
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

