import React from 'react'
import {withRouter}from'react-router-dom'
import Bar from '../layout/Flex'
import {WingBlank,WhiteSpace,NavBar,Icon}from 'antd-mobile'
import {connect} from 'react-redux'
import DocumentTitle from"react-document-title"
import "../animate.css"

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAction:0,
            className:"bounceInRight animated"
        }
    }
    componentWillUnmount() {
        console.log("卸载home")

    }


    render() {
        return(
            <DocumentTitle title="首页">
               <div>
                   <NavBar
                       mode="dark"
                       icon={<Icon type='left'/>}
                       onLeftClick={()=>{console.log("返回")}}
                       rightContent={
                           [<Icon style={{marginRight:'9px'}} key='0' type='search' onClick={(e)=>console.log("搜索")}/>,
                               <Icon key='1' type='ellipsis' onClick={(e)=>console.log("更多")}/>
                           ]
                       }

                   >首页</NavBar>
                   <div className="animated fadeIn">
                       <h1 className='hello'>两翼留白/上下留白</h1>
                       <WhiteSpace size='xs'/>
                       <WingBlank><h1 className='hello'>Home</h1></WingBlank>
                       <WhiteSpace size='sm'/>
                       <WingBlank size='md'><h1 className='hello'>Home</h1></WingBlank>
                       <WhiteSpace size='md'/>
                       <WingBlank size='sm'><h1 className='hello'>Home</h1></WingBlank>
                       <WhiteSpace size='lg'/>
                   </div>


                   <Bar flag={this.state.isAction}/>
               </div>
            </DocumentTitle>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
    return {
       login:state.isLogin
    }
}
const mapDispatchToProps=(dispatch)=>{
   return{
       handleLogin:(login="login")=>{
           dispatch({type:login})
       }
   }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
