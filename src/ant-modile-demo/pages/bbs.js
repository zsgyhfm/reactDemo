import React from 'react'
import {withRouter}from'react-router-dom'
import Bar from '../layout/Flex'
import {NavBar} from 'antd-mobile'


class Bbs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAction:2
        }
    }
    componentWillUnmount() {
        console.log("卸载bbs")
    }

    render() {
        return(
            <div>
                <NavBar>BBS</NavBar>
                <Bar flag={this.state.isAction}/>
            </div>
        )
    }
}
export default withRouter(Bbs)
