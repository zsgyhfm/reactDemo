import React from 'react'
import {Flex} from 'antd-mobile'
import styled from 'styled-components'
import './Flex.css'
import {Link} from 'react-router-dom'

const TabBar = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
height: 30px;
line-height: 30px;
text-align: center;
`;
// 这是一个快捷的组件对象  组件上传的参数 props 会转换成为一个对象传递给构造函数
const ItemDemo=({classname,msg,path,component})=>{

    return (
        <div className={classname}>
            <Link to={path}>{msg}</Link>
        </div>
    )
};
let data = [
    {icon:'',path:'/',msg:'首页',classname:"placeholder",component:'Home'},
    {icon:'',path:'/news',msg:'新闻',classname:"placeholder",component:'News'},
    {icon:'',path:'/bbs',msg:'社区',classname:"placeholder",component:"Home"},
    {icon:'',path:'/profile',msg:'我的',classname:"placeholder",component:"Home"},
    ];

class FlexDemo extends React.Component {
    componentWillMount() {
        console.log("tabbar",this.props);
        //修改data
        const isAction = this.props;


        data.map((item,index)=>{
            if(index===isAction.flag){
                data[index].classname+=" flag"
            }else {
                data[index].classname="placeholder"
            }
        })
    }

    render() {
        return (
            <TabBar>
                <Flex>
                    {
                        data.map((item)=>{
                            return (
                             <Flex.Item key={item.msg}><ItemDemo {...item}/></Flex.Item>
                            )
                        })
                    }
                </Flex>
            </TabBar>
        )
    }
}

export default FlexDemo
