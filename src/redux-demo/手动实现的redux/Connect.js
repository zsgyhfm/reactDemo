import React,{Component} from 'react'
import propType from 'prop-types'
const connect=(mapToProp)=>(WapperComponent)=>{
    class Connect extends Component{
        //从context取值 必须设置属性限定
        static contextTypes={
            store:propType.object
        };

        render() {
            const {store}=this.context;
            //获取store.state 用这个函数从state中获取所需要的属性
            let state = mapToProp(store.state);
            //将属性作为props传入 被包装的组件
            return(
                <WapperComponent {...state}/>
            )
        }
    }
}
