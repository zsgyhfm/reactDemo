import React,{Component,Fragment} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar} from 'antd-mobile'
import DocumentTitle from "react-document-title"
import {connect}from 'react-redux'
//首页
class Home extends Component{
    constructor() {
        super();
        this.state = {
            homeAction: false
        }
    }
    componentWillMount() {
        this.setState({
            homeAction:true
        })
    }
    render() {
        return(
            <DocumentTitle title={"首页"}>
                <Fragment>
                    <NavBar style={{backgroundColor:"#2F2F2F"}}>首页</NavBar>

                    <Tabbar cur={0}/>
                </Fragment>
            </DocumentTitle>
        )
    }
}
const isLoginMapToProps = (state)=>{
    return {
        isLogin:state.login
    }
};
export default connect(isLoginMapToProps)(Home)
