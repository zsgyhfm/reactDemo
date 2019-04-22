import React,{Component} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar} from 'antd-mobile'
import DocumentTitle from "react-document-title"
import {connect}from 'react-redux'
import Slider from "../components/Slider"
import styled from 'styled-components'
import jrpg from "../images/jrqg.png"
import  mrxp from "../images/mrxp.png"
import GoodsWraper from '../components/GoodsItem'
import NavWrapper from "../components/NavWrapper"
import HomeLook from "../components/HomeLook"
import  "./home.css"

const CardDiv = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
height: ${props=>props.height?props.height:"12vh"};
background: url(${props=>props.url?props.url:""})no-repeat center;
background-size: 100% 100%;
`;
const ImgDiv = styled.div`
flex-grow: 1;
justify-content: space-between;
background: url(${props=>props.url}) no-repeat scroll center;
background-size: 100% 100%;
`;
const SearchInput = styled.a`
width: 90vw;
border: none;
outline: none;
background-color:#EBEBEB;
border-radius: 3px;
height: 30px;
color: #B5B5B5;
font-size: 16px;
line-height: 30px;
padding-left: 10px;
`;


//首页
class Home extends Component{
    constructor() {
        super();
        this.state = {
            homeAction: false,
            loading:false
        };
        this.handleScroll=(e)=>{
            //滚动到底部 请求新数据
            // 725 +840
            // 滚动高度+ 可使高度 >= 文档高度（document.body.clientHeight）
            // console.log(e.target.scrollTop)
            let scrollH = e.target.scrollTop;
            let clientH = document.body.clientHeight-48;
            let contentH = document.querySelector(".home").clientHeight;
            let result = contentH-scrollH-clientH;
            // console.log(this.state.loading)
            if(result===0&&!this.state.loading){
               console.log("加载新数据");
               this.state.loading = true;

                this.setState(
                    {
                        loading:this.state.loading
                    }
                )
                //加载完毕 在改为false
            }
        };
        this.handleSearch=()=>{

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
                <NavWrapper onScrollCapture={this.handleScroll.bind(this)}>
                   <div className={"home navWrapper"}>
                       <NavBar style={{backgroundColor:"#2F2F2F"}}><SearchInput href={"/search"} onClick={this.handleSearch.bind(this)}> 搜索 </SearchInput></NavBar>
                       <Slider/>
                       <CardDiv height={"12vh"}>
                           <ImgDiv url={jrpg}/>
                           <ImgDiv url={mrxp}/>
                       </CardDiv>

                       <CardDiv url={"http://demo.demohuo.top/modals/17/1779/demo/images/a.png"} height={"2.9rem"}/>
                       <HomeLook>

                       </HomeLook>
                       <GoodsWraper/>
                       <CardDiv url={"http://demo.demohuo.top/modals/17/1779/demo/images/b.png"} height={"2.9rem"}/>
                       <HomeLook/>
                       <GoodsWraper/>
                       <CardDiv url={"http://demo.demohuo.top/modals/17/1779/demo/images/c.png"} height={"2.9rem"}/>
                       <p style={{textAlign:"center",fontSize:"14px",fontWeight:"lighter",padding:0,margin:0,height:"30px",lineHeight:"30px"}}>数据加载中....</p>
                       <Tabbar cur={0}/>
                   </div>
                </NavWrapper>
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
