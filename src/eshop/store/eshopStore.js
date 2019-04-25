import {combineReducers} from 'redux'
import login from '../reducer/isLogin'
import {persistReducer,persistStore} from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"
import {createStore} from 'redux'
//将store本地化
//1.配置
const persistConfig = {
    key:"root",
    store:storageSession,
    whitelist:[login]
};
//2.创建reducer
const reducer = persistReducer(persistConfig,login);


const rootReducer =combineReducers({
    reducer
});



export const store = createStore(rootReducer);
export const perStore = persistStore(store);
