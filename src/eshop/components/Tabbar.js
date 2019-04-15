import React from 'react'
import {Flex} from 'antd-mobile'
import styled from 'styled-components'
import home from "../images/icon/i-home.png"
import homeActive from "../images/icon/i-home-active.png"
import profile from '../images/icon/i-wo.png'
import profileActive from '../images/icon/i-wo-active.png'
import cart from '../images/icon/i-cart.png'
import cartActive from '../images/icon/i-cart-active.png'
import category from '../images/icon/i-category.png'
import categoryActive from '../images/icon/i-category-active.png'

import BarItem from "./BarItem"


const Footer = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
height:48px;
background-color: #2F2F2F;
color: #C4C4C4;
`;
const data = [
    {icon: home, iconActive: homeActive, action: 1, title: "首页", path: "/"},
    {icon: category, iconActive: categoryActive, action: 0, title: "分类", path: "/catergory"},
    {icon: cart, iconActive: cartActive, action: 0, title: "购物车", path: "/cart"},
    {icon: profile, iconActive: profileActive, action: 0, title: "我的", path: "/profile"},
];

// tabbar组件
class Tabbar extends React.Component {
    render() {
        return (
            <Footer>
                <Flex>
                    {
                        data.map((item, index) => {
                            if (index === this.props.cur) {
                                item.action = 1;
                            } else {
                                item.action = 0;
                            }

                            return (
                                <Flex.Item key={index}>
                                    <BarItem {...item}/>
                                </Flex.Item>
                            )
                        })
                    }
                </Flex>
            </Footer>
        )
    }
}

export default Tabbar
