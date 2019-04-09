import React, {Component} from 'react'
import propTypes from 'prop-types'

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: propTypes.string,
        onSwitchColor:propTypes.func
    };

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSwitchColor.bind(this, 'blue')}>蓝色</button>
                <button onClick={this.handleSwitchColor.bind(this, 'red')}>红色</button>
            </div>

        )
    }
}
