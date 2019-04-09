import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    //注意这里和最顶层组建的不一样childContextTypes
    //必须声明类型 否则无法获取到context的内容
    static contextTypes={
        store:PropTypes.object
    };
    constructor(){
        super();
        this.state={
            themeColor: ''
        }
    }
    componentWillMount() {
        const {store}=this.context;
        store.dispatch({type:"RED",themeColor:'green'});//修改值
        const state = store.getState();//取值
        this.setState({
            themeColor:state.themeColor
        })
    }
    render () {
        return (
            <h1 style={{color:this.state.themeColor }}>React.js 小书</h1>
        )
    }

}

export default Header
