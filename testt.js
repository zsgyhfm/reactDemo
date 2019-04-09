//纯函数 只为了生成 state 数据
let reducer = (state, action) => {
    if (!state) {
        return {
            name: 'zaks',
            age: 12
        }
    }
    //这里是为了dispatch 用来着，如果传递action的话
    switch (action.type) {
        case "ADD":
            return {
                ...state, age: action.age
            };
        case "MINS":
            return {
                ...state, age: action.age
            };
        default:
            return state

    }
};

//createstore
let createStore = (reduc) => {
    let state = null;
    const getState = () => state;
    const dispatch = (action) => {
        state = reduc(state, action)
    };
    //初始化state
    dispatch();
    return {getState, dispatch}
};

let store = createStore(reducer);
let st =store.getState();
console.log(st);
store.dispatch({type:"ADD",age:20});
let st1 =store.getState();
console.log(st1);
store.dispatch({type:"MINS",age:25});//如果type错误 就不执行
let st2 =store.getState();
console.log(st2);
