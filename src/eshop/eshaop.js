import React,{Fragment}from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

//导入路由设置
class Eshop extends React.Component{

    render() {
        return (

                <Fragment>
                    <Route path="/" exact component={Home}/>
                    <Route path="/catergory"  component={Category}/>
                    <Route path="/cart"  component={Cart}/>
                    <Route path="/profile"  component={Profile}/>
                </Fragment>

        )
    }
}
export default Eshop
