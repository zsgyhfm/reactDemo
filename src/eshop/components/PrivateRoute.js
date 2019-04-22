import React from 'react'
import {Route, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class PrivateRoute extends React.Component {


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
