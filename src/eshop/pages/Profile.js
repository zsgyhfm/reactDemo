import React,{Component,Fragment} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar} from "antd-mobile";
import DocumentTitle from "react-document-title"

class Profile extends Component{
    constructor() {
        super();
        this.state = {
            profileAction: false
        }
    }
    componentWillMount() {
        this.setState({
            profileAction:true
        })
    }
    render() {
        return(
            <DocumentTitle title={"我的"}>
                <Fragment>
                    <NavBar style={{backgroundColor:"#2F2F2F"}}>我的</NavBar>
                    <Tabbar cur={3}/>
                </Fragment>
            </DocumentTitle>

        )
    }
}
export default Profile
