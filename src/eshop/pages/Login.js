import React from 'react'
import {NavBar,Icon} from'antd-mobile'

import DcouemntTitle from 'react-document-title'
import login from './login.css'

class Login extends React.Component{
    handleForm(e){
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
                        <input type="text" name={"account"}  placeholder={"用户名"}/>
                        <input type="password" name={"password"} placeholder={"密码"}/><br/>
                        <button className={"loginBtn"}>登陆</button>
                    </form>
                </div>
            </DcouemntTitle>
        )
    }
}
export default Login;
