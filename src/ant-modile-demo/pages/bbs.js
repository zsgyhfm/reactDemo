import React from 'react'
import {withRouter}from'react-router-dom'
import Bar from '../layout/Flex'
import {NavBar} from 'antd-mobile'
import DocumentTitle from"react-document-title"

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
            <DocumentTitle title="BBS">
            <div>
                <NavBar>BBS</NavBar>
                <Bar flag={this.state.isAction}/>
            </div>
            </DocumentTitle>
        )
    }
}
export default withRouter(Bbs)
