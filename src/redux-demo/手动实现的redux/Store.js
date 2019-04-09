// 返回一个getstate 和dispatch的对象
const CreateStore=(reducer)=>{
    let state = null;
    const getState=()=>state;
    const dispatch=(action)=>{
        state=reducer(state,action)
        //监听者
    };
    //初始化state
    dispatch();
    return{getState,dispatch}
};

export default CreateStore
