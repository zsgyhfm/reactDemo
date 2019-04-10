//讲getstate和dispatch结合到一起 叫store
const store=(reducer)=>{
    //reducer函数 需要两个参数
    let state = null;
    const getSate=()=>state;
    const dispatch=(action)=>{
        state = reducer(state,action)
    };
    //初始化state
    dispatch()
    return{getSate,dispatch}
}
export default createStore
