import React,{Fragment} from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Profile from './pages/profile'
import Bbs from './pages/bbs'

class Router1 extends React.Component{

    render() {
        return(
            <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/news"  component={News} />
                <Route path="/bbs"  component={Bbs} />
                <Route path="/profile"  component={Profile} />
            </Fragment>
        )
    }
}
export default Router1;
