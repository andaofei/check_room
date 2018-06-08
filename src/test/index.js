/**
 * Created by Administrator on 2018/1/5.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app'
import '../index.less';

import {counter} from './redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const reduxDevTools = window.reduxDevTools?window.reduxDecToolsExtension():f=>f;

const store = createStore(counter,applyMiddleware(thunk),reduxDevTools);
//provider只用一次
ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),document.getElementById('root'));
