//reducer只返回数据  纯函数
let info = {
    name:'zaks',
    age:'28'
};
const Info=(state=info,action)=>{
    //改进下
    if(!action){
        action.type='';
    }
    switch(action.type){
        case"CHANGE_NAME":
            return{
                ...state,name:action.name
            };
        case"CHANGE_AGE":
            return {
                ...state,age:action.age
            };
        default:
            return state
    }
};
export default Info
