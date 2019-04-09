import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './themeSwitch'

class Content extends Component {
    //contextTypes是关键字
    static contextTypes = {
        themeColor:PropTypes.string
    };
    render () {
        return (
            <div>
                <p style={{color:this.context.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch/>
            </div>
        )
    }
}

export default Content
