import React ,{Component}from 'react'
import propTypes from 'prop-types'
// import {connect} from './connect'
//dump 组件
class DumbHeader extends Component{
    //指定props类型
    static propTypes={
        //如果没有isRequired，传入空值的话 就是undefined 报错
        themeColor:propTypes.string.isRequired
    };
    render(){
        return (
            <div style={{color:this.props.themeColor}}>Header位置</div>
        )
    }
}

export default DumbHeader
// const mapStateToPop=(state)=>{
//
//     return{
//         themeColor:state.themeColor
//     }
// }
// export default connect(mapStateToPop)(Header)
