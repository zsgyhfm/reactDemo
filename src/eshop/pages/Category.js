import React, {Component, Fragment} from 'react'
import Tabbar from '../components/Tabbar'
import {NavBar} from "antd-mobile";
import DocumentTitle from "react-document-title"
import styled from 'styled-components'
import "./Category.css"
import CategoryItem from "../components/CategoryItem"

const Slider = styled.ul`
width: 1.66rem;
//background-color:green;
height: 100%;
overflow-y: scroll;
overflow-x: hidden;
`;
class Category extends Component {
    constructor(){
        super();
        this.state={
            selectCa:0
        };
        this.handleSelectCa = (index)=>{
            this.setState({
                selectCa:index
            })
        }
    }

    render() {
        const liData = [
            "为你推荐","特卖专场","每日新品","每周热卖","个护化妆","精品美食",
            "地标特产","时令鲜果","流行服饰","男女鞋靴","时尚箱包","营养保健","母婴用品",
            "名酒名茶","家居日用","数码/家电"
        ];
        const items=[
            {
                title:"热门分类",
                urls:[1]
            },
            {
                title:"每日特卖专场",
                urls:[1,2]
            },
            {
                title:"每日新品",
                urls:[1,2,3]
            },
            {
                title:"每周热卖",
                urls:[1,2,3,4]
            },
            {
                title:"个护化妆",
                urls:[1,2,3,4,5]
            },
            {
                title:"精品美食",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"地标特产",
                urls:[1,2,3,4,5,6,7,8,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,11,1,1,1,11,1,1,1,1,1,1]
            },
            {
                title:"时令鲜果",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"流行服饰",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"男女鞋靴",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"时尚箱包",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"营养保健",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"母婴用品",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"名酒名茶",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"家居日用",
                urls:[1,2,3,4,5,6]
            },
            {
                title:"数码/家电",
                urls:[1,2,3,4,5,6]
            }
        ];
        return (
            <DocumentTitle title={"分类"}>
            <div className={"Category"}>
                <NavBar style={{backgroundColor:"#2F2F2F"}}>分类</NavBar>
                <Tabbar cur={1}/>
                <Slider className={"Categoryslider"}>
                    {
                        liData.map((item,index)=>{
                            return (
                                <li key={index} className={this.state.selectCa===index?"selectCategory":""} onClick={this.handleSelectCa.bind(this,index)}>{item}</li>
                            )
                        })
                    }
                </Slider>

                   <div className={"CategoryItems"}>
                       <CategoryItem items={items[this.state.selectCa]}/>
                   </div>

            </div>
            </DocumentTitle>
        )
    }
}

export default Category
