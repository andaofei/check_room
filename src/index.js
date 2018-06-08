import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.less';
import '../src/common/css/index.less'
import {createStore, applyMiddleware, compose} from 'redux';
// import {counter} from './redux/index';
import thunk from 'redux-thunk';
import {Provider}from 'react-redux'; // 组件
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import Auth from './pages/login/Auth'
import Dashboard from './pages/home'
import AudioLog from './pages/audioLog/index'
import reducers from './redux/reducer'
import './api/config'
//判断调试工具是否存在
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// 调试工具
const store = createStore(reducers,
compose(applyMiddleware(thunk), reduxDevTools));
console.log(store.getState());
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter >
            <Switch>
                {/*只渲染命中的Route*/}
                <Route path="/login" component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/audiolog" component={AudioLog}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>
            {/*<App/>*/}
        </BrowserRouter>
    </Provider>), document.getElementById('root'));
registerServiceWorker();

