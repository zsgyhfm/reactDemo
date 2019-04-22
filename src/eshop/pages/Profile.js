import React, {Component, Fragment} from 'react'
import Tabbar from '../components/Tabbar'
import styled from "styled-components"
import DocumentTitle from "react-document-title"
import userbg from "../images/user-box-bg.png"
import "./profile.css"

const Header = styled.div`
height: 3.2rem;
background: url(${userbg}) no-repeat center;
background-size: cover;
width: 100%;
margin-bottom: 0.32rem;
`;

const Profilecard = styled.div`
height: 2.3rem;
background-color:#fff;
width: 100%;
padding: 0 0.3rem;
margin-top: 0.2rem;
`;

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profileAction: false
        }
    }

    componentWillMount() {
        this.setState({
            profileAction: true
        })
    }

    render() {
        return (
            <DocumentTitle title={"个人中心"}>
                <div className={"profile"}>
                    <Header className={"profile-header"}>
                        <div className={"profile-head"}></div>
                        <div className={"profile-info"}>
                            <p>XXX <span className={"profile-vip"}>开通年卡会员</span></p>
                            <p>推荐人:商家 <span className={"profile-modify"}>修改</span></p>
                            <p>会员号:10654131516</p>
                        </div>
                        <div className={"profile-step"}>
                            <div>
                                <span>0</span>
                                <p>待付款</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>待收获</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>待评价</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>退款/售后</p>
                            </div>
                        </div>
                    </Header>
                    <Profilecard>
                        <div className={"profile-cardtitle"}>
                            <span>金卡会员</span> <span>会员等级</span>
                        </div>
                        <div className={"profile-cardcon"}>
                            <div>
                                <span>0</span>
                                <p>我的粉丝</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>本月账单</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>本月积分返点</p>
                            </div>
                        </div>
                    </Profilecard>
                    <Profilecard>
                        <div className={"profile-cardtitle"}>
                            <span>我的钱包</span> <span></span>
                        </div>
                        <div className={"profile-cardcon"}>
                            <div>
                                <span>0</span>
                                <p>我的粉丝</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>本月账单</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>本月积分返点</p>
                            </div>
                        </div>
                    </Profilecard>
                    <Tabbar cur={3}/>
                </div>
            </DocumentTitle>

        )
    }
}

export default Profile
