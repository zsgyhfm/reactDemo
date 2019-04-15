import React from 'react'
import {Route, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
//私有route 判定是否登陆  如果没有登陆就转到登陆组件
// class PrivateRoute extends React.Component {
//     componentWillMount() {
//         // console.log("私有路由",this.props)
//     }
//
//     render() {
//         const {login,path,component} = this.props;
//         console.log("私有路由",this.props)
//         return(
//             <Route path={login?component:"/"}/>
//         )
//     }
// }

class PrivateRoute extends React.Component {
    componentWillMount() {
        console.log("私有路由",this.props)
    }

    render() {
        const {login,component,path} = this.props;
        if(login){
            return (<Route path={path} component={component}/>)
        }else {
            return (<Redirect  to={"/login"}/>)
        }
    }
}


const mapStoreToProps = state => {
    return {
        login: state.login
    }
};
export default withRouter(connect(mapStoreToProps)(PrivateRoute))
