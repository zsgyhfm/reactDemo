import {combineReducers} from 'redux'
import login from '../reducer/isLogin'
import {persistReducer,persistStore} from "redux-persist"
import storageSession from "redux-persist/lib/storage/session";
import {createStore} from 'redux'
//将store本地化
//1.配置
const persistConfig = {
    key:"root",
    storage:storageSession,
    whitelist:["login"]//这里的key要和导入的模块名称一样
};
const rootReducer =combineReducers({
    login
});
//2.创建reducer
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = createStore(persistedReducer);
//将sotore包装下 最后交给
export const perStore = persistStore(store);
