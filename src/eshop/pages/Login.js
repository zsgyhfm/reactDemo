import React from 'react'
import {NavBar,Icon} from'antd-mobile'
import styled from 'styled-components'
import DcouemntTitle from 'react-document-title'
import  './login.css'
const Divs = styled.div`
height: 30px;
color: #fff;
display: flex;
width: 80%;
margin: 10px auto;
flex-flow: row nowrap;
justify-content: space-between;
padding: 0 10px;
`;
class Login extends React.Component{
    handleForm(e){
        //阻止表单默认动作
        e.preventDefault();
    }
    render() {
        return(
            <DcouemntTitle title={"登陆"}>
                <div className={"login"}>
                    <NavBar icon={<Icon type="left"/>} onLeftClick={
                        ()=>{window.history.go(-1)}
                    } style={{backgroundColor:"transparent"}}>登陆</NavBar>
                    <form className={"loginForm"} method={"post"} onSubmit={this.handleForm.bind(this)}>
                        <input className={"loginInput"} type="text" name={"account"}  placeholder={"用户名"}/>
                        <input className={"loginInput"} type="password" name={"password"} placeholder={"密码"}/><br/>
                        <button className={"loginBtn"}>登陆</button>
                        <Divs>
                            <a className={"login-a"} href={"javascript:void(0)"}>忘记密码</a>
                            <a className={"login-a"} href={"javascript:void(0)"}>立即注册</a>
                        </Divs>
                    </form>

                </div>
            </DcouemntTitle>
        )
    }
}
export default Login;
