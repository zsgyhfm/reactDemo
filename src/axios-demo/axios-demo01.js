import axios from 'axios'
import React, {Component} from 'react'


class AxiosDemo extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            cancel: false
        }
        this.config = {
            url: "http://127.0.0.1:5000/"
        };

    }

    handleGet() {
        axios.get("http://127.0.0.1:5000/", {params: {"id": 123}}).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log("get失败")
        });

        // axios.get("http://127.0.0.1:5000/").then(res => {
        //     console.log("请求结果:", res.data);
        //
        // }).catch(err => {
        //     console.log("get失败")
        // })

    }

    ctoken = axios.CancelToken.source();
    componentWillUnmount() {
        this.ctoken.cancel("组件要销毁了  都滚犊子吧")
    }

    handlePost() {
        axios.post(
            this.config.url,
            {"name": "zaks"},
            { cancelToken: this.ctoken.token})
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            }
        )

    }

    render() {
        return (
            <div>
                <h1>father</h1>
                <button onClick={this.handleGet.bind(this)}>get</button>
                <button onClick={this.handlePost.bind(this)}>post</button>

            </div>

        )
    }
}


export default AxiosDemo

