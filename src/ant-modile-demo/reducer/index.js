 const isLogin=(state=false,action)=>{
    if (action.type=="login"){
        return true
    }else if(action.type=="logout"){
        return false
    }else {
        return state
    }
 };
export default isLogin
