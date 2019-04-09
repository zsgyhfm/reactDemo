//创建reducer 就是 修改state的方法
import {RED,BLUE} from "../../ActionType/ActionType"
const Color = {themeColor:'red'};

export default (state = Color, actions) => {
    if(!state){
        return Color
    }
    switch (actions.type) {
        case RED:
            return {
                ...state, themeColor: actions.themeColor
            };
        case BLUE:
            return {
                ...state, themeColor:actions.themeColor
            };
        default:
            return state
    }
}


