import React,{Component,Fragment} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar} from "antd-mobile";
import DocumentTitle from "react-document-title"

class Cart extends Component{
    constructor() {
        super();
        this.state = {
            bbsAction: false
        }
    }
    componentWillMount() {
        this.setState({
            bbsAction:true
        })
    }
    render() {
        return(
            <DocumentTitle title={"购物车"}>
            <Fragment>
                <NavBar style={{backgroundColor:"#2F2F2F"}}>购物车</NavBar>
                <Tabbar cur={2}/>
            </Fragment>
            </DocumentTitle>
        )
    }
}
export default Cart
