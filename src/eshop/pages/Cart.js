import React, {Component} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar, Icon} from "antd-mobile";
import DocumentTitle from "react-document-title"
import  "./cart.css"
import NavWrapper from "../components/NavWrapper";
import CarList from "../components/CarItem"
import styled from 'styled-components'

const CheckIn = styled.div`
position: fixed;
width: 100%;
height: 0.8rem;
z-index: 1;
background-color:#fff;
bottom: 48px;
padding-left: 10px;
display: block;
`;
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            buyAll:false,
            dataList:[
                {
                    title: "德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐",
                    detail: "【1灌装】800g/罐",
                    price: 228.36,
                    img: "http://demo.demohuo.top/modals/17/1779/demo/images/22.png",
                    count: 1,

                },
                {
                    title: "德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐",
                    detail: "【1灌装】800g/罐",
                    price: 228.36,
                    img: "http://demo.demohuo.top/modals/17/1779/demo/images/22.png",
                    count: 1
                },
                {
                    title: "德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐",
                    detail: "【1灌装】800g/罐",
                    price: 228.36,
                    img: "http://demo.demohuo.top/modals/17/1779/demo/images/22.png",
                    count: 1
                },
                {
                    title: "德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐",
                    detail: "【1灌装】800g/罐",
                    price: 228.36,
                    img: "http://demo.demohuo.top/modals/17/1779/demo/images/22.png",
                    count: 1
                }
            ],
            total:0,
            amount:0
        };
        this.handleCheck=(data)=>{
            //全选
            this.state.buyAll= !this.state.buyAll;
            this.setState({
                buyAll:this.state.buyAll
            });
            console.log("购物车父组件接受子组件数据",data)
            if(this.state.buyAll){
                console.log("父组件 全选")
            }else {
                console.log("父组件 取消")
            }
        };
        this.getResult=(data)=>{
            this.setState({
                total:data.total,
                amount:data.amount
            })
        }
    }


    render() {
        return (
            <DocumentTitle title={"购物车"}>
                <NavWrapper>
                    <div className={"car navWrapper"}>
                        <NavBar
                            style={{backgroundColor: "#2F2F2F"}}
                            icon={<Icon type="left"/>}
                            rightContent={[
                                <span key="0">编辑</span>,
                            ]}
                        >购物车</NavBar>
                        <CarList computed={this.getResult.bind(this)} selectAll={this.handleCheck.bind(this)} buyAll={this.state.buyAll} dataList={this.state.dataList} total={this.state.total} amount={this.state.amount}/>
                        <Tabbar cur={2}/>
                    </div>
                    <CheckIn className={"checkIn"} buyAll={this.state.buyAll}>
                        <p>合计:&nbsp;￥&nbsp;<span>{this.state.amount.toFixed(2)}</span></p>
                        <button>结算({this.state.total})</button>
                    </CheckIn>
                </NavWrapper>
            </DocumentTitle>
        )
    }
}

export default Cart
