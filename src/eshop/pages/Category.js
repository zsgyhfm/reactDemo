import React, {Component, Fragment} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar} from "antd-mobile";
import DocumentTitle from "react-document-title"


class Category extends Component {


    render() {
        return (
            <DocumentTitle title={"分类"}>
            <Fragment>
                <NavBar style={{backgroundColor:"#2F2F2F"}}>分类</NavBar>
                推荐
                <Tabbar cur={1}/>
            </Fragment>
            </DocumentTitle>
        )
    }
}

export default Category
