import React from 'react'
import {withRouter} from 'react-router-dom'
import Bar from '../layout/Flex'
import {NavBar} from "antd-mobile";
import {Button, Grid, Paper, withStyles} from '@material-ui/core'
import "../animate.css"
import propsType from 'prop-types'
import DocumentTitle from"react-document-title"
const styles = theme => {
    return ({
        Paper: {
            height: 140,
            width: 100,
        }
    })
}

class Profile extends React.Component {
    static propTypes = {
        classes: propsType.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            isAction: 3
        }
    }

    componentWillUnmount() {
        console.log("卸载profile")
    }

    render() {
        console.log(this.props)
        const {classes} = this.props
        const {match} = this.props;
        return (
            <DocumentTitle title="我的">


            <div>
                <NavBar>我的</NavBar>

                <p>当前路径为:{match.path}</p>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={Number(16)}>
                        <Grid key={0} item>
                            <Paper className={classes.Paper}/>
                        </Grid>
                        <Grid key={1} item>
                            <Paper className={classes.Paper}/>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.Paper}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Bar flag={this.state.isAction}/>
            </div>
            </DocumentTitle>
        )
    }
}

export default withRouter(withStyles(styles)(Profile))
