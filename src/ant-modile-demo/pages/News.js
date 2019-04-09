import React from 'react'
import {withRouter}from'react-router-dom'
import Bar from '../layout/Flex'
import {NavBar} from 'antd-mobile'

import "../animate.css"

class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAction:1
        }
    }

    componentWillUnmount() {
        console.log("卸载news")
    }

    render() {
        return(
          <div>
                  <NavBar >新闻</NavBar>
              <p className="animated fadeIn">嘻嘻嘻嘻嘻嘻嘻嘻</p>
                  <Bar flag={this.state.isAction}/>
          </div>
        )
    }
}
export default withRouter(News)
