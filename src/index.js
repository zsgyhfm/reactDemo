import "./index.css";

import React from "react";
import ReactDOM from "react-dom";


import EshopRouter from './eshop/eshop'
//使用路由
import {BrowserRouter} from 'react-router-dom'

//使用redux
import {Provider} from 'react-redux'

import {createStore} from 'redux'
//导入reducer
import rootReducer from './eshop/store/eshopStore'
const store = createStore(rootReducer);
//将store绑定在provider上
ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
           <EshopRouter/>
       </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// module.hot && module.hot.accept();
