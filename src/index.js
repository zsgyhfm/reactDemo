import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
// import FlexDemo from './ant-modile-demo/layout/Flex'

import Router1 from './ant-modile-demo/router'
//使用路由
import {BrowserRouter} from 'react-router-dom'

//使用redux
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
//导入reducer
import isLogin from './ant-modile-demo/reducer/'

//将store绑定在provider上
const store = createStore(combineReducers({isLogin}));


ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
           <Router1/>
       </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// module.hot && module.hot.accept();
