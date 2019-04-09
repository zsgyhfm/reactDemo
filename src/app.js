import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'

// import {Route, withRouter, Link, Switch,Router} from 'react-router-dom'

//高阶组件将store传到组件的props
import {connect} from 'react-redux'


// import Father from './redux-demo/Father'
// // import Child from './redux-demo/Child'
import AxiosDemo from'./axios-demo/axios-demo01'
class App extends PureComponent {

    render() {

        return (
        <AxiosDemo/>
        )
    }
}
//注意了  conenct会去读取context的store  传递一个state参数
const mapToProps=(state)=>{
    return{
        ...state
    }
};

export default App
