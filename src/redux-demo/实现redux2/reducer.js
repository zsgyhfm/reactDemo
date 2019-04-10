// reducer 仅仅负责生成state数据
const Color=(state,action)=>{
    if (!state){
        return {
            title:"index",
            color:'red',
            login:0
        }
    }
    switch (action.type) {
        case "CHANGE_COLOR":
            return {
                ...state,color:action.color
            };
        case "CHANGE_TITLE":
            return {
                ...state,title:action.title
            };
        case "CHANGE_LOGIN":
            return {
                ...state,login:action.login
            };
        default:
            return state
    }
}
