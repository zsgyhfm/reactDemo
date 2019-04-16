import React,{Component,Fragment} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar} from 'antd-mobile'
import DocumentTitle from "react-document-title"
import {connect}from 'react-redux'
import Slider from "../components/Slider"
import styled from 'styled-components'
import jrpg from "../images/jrqg.png"
import  mrxp from "../images/mrxp.png"
const CardDiv = styled.div`
width: 100vw;
display: flex;
flex-flow: row nowrap;
height: ${props=>props.height?props.height:"145px"};
background: url(${props=>props.url?props.url:""})no-repeat center;
background-size: cover;
`;
const ImgDiv = styled.div`
flex-grow: 1;
justify-content: space-between;
background: url(${props=>props.url}) no-repeat scroll center;
background-size: cover;
`;
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
                    <Slider/>
                    <CardDiv height={"74px"}>
                        <ImgDiv url={jrpg}/>
                        <ImgDiv url={mrxp}/>
                    </CardDiv>
                    <CardDiv url={"http://demo.demohuo.top/modals/17/1779/demo/images/a.png"} height={"145px"}/>
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
