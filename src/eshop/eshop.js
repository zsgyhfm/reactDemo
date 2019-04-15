import React,{Fragment}from 'react'
import {Route ,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import Login from "./pages/Login";

//导入路由设置
class Eshop extends React.Component{

    render() {
        return (

                <Fragment>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/catergory"  component={Category}/>
                        <Route path="/cart"  component={Cart}/>
                        {/*<Route path="/profile"  component={Profile}/>*/}
                        <PrivateRoute path={"/profile"} component={Profile}/>
                        <Route path="/login"  component={Login}/>
                    </Switch>
                </Fragment>

        )
    }
}
export default Eshop
