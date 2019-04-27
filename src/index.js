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
import {perStore, store} from './eshop/store/eshopStore'
//导入
import {PersistGate} from 'redux-persist/integration/react'

//将store绑定在provider上
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={perStore}>
            <BrowserRouter>
                <EshopRouter/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
document.getElementById("root")
)

// module.hot && module.hot.accept();
