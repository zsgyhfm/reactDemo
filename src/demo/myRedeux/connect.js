import React,{Component} from 'react'
import propType from 'prop-types'

export const  connect=(StateToProp)=>(WrappedComponent)=>{
    class Connect extends Component{
        static contextTypes = {
            store:propType.object
        };
        componentWillMount() {
            console.log("connect",this.context)
        }

        render() {
            const {store}=this.context;
            //将state按照指定的规则转换成对象--赋值props
            let stateToProp = StateToProp(store.getState());
            //将json 作为props属性传到 组件上
            return(
                <WrappedComponent {...stateToProp}/>
            )
        }
    }
    return Connect
};
