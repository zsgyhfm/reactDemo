import React ,{Component}from 'react'
import propTypes from 'prop-types'
//dump 组件
class Header extends Component{
    //指定props类型
    static propTypes={
        //如果没有isRequired，传入空值的话 就是undefined 报错
        themeColor:propTypes.string.isRequired
    };
    render(){
        return (
            <div style={this.props.themeColor}>Header位置</div>
        )
    }
}
export default Header
