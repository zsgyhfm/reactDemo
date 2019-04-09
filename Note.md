# React-redux 理解
## 1. 原理
1. 父子组件之间通过props传值，如果嵌套的层数少可以，如果层数多了，
那么就要一层一层的传递，非常麻烦
2. 解决`props`的问题，React父组件有一个`context`属性，可以被任意子组件访问和修改，
而不用一层一层的去获取，它只能被它的子组件访问，它的父组件是无法访问的。
3.context 被它所有的子组件读写，数据是不安全的。
4.所以要对他的写入操作进行限制，通过一个函数`dispatch(action)`根据参数的`action.type`
对数据进行修改。action中最少有一个`type`属性,也可以有其他数据属性
## 2.使用react-redux
1. 创建reducer-纯函数，只两个参数`state`和`action`.就是stateChanger。没有传入state
就返回一个初始化的`state`,有`state`就根据`action.type`产生一个新的`state`返回。它要做的仅仅是 —— 初始化和计算新的 `state`
2. 根据reducer创建`store`,`store`返回一个对象包含`getState`和`dispatch`，
等同于吧获取数据和修改数据封装到一起了。
## 3.简易案例
```
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
store.dispatch({type:"ADD",age:20});//如果type错误 就不执行
let st1 =store.getState();
console.log(st1);

```
