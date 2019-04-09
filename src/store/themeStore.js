// import {c} from'react-redux'
import reducer from "../demo/reducer/theme"
function createStore(reducer) {
    let state = null;
    const getState = ()=>state;
    const dispatch=(action)=>{
        state=reducer(state,action)
    };
    //初始化state
    dispatch();
    return{getState,dispatch}
}
const store = createStore(reducer);
export default store
