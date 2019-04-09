import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link,Redirect,withRouter} from "react-router-dom";

class Child extends Component {

    handleChangeName(name) {
        this.props.dispatch({type: "CHANGE_NAME", name: name})
    }

    render() {
        console.log("child")
        return (
            <div>
                <h1>child</h1>
                <Link to="/father">father</Link>
                <p>{this.props.name}:{this.props.age}</p>
                <button onClick={this.handleChangeName.bind(this, 'sephiroth')}>改名字</button>
            </div>

        )
    }
}

const mapToProps = (state) => {
    return {
        ...state
    }
};

export default withRouter(connect(mapToProps)(Child))

