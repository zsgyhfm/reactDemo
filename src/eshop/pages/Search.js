//搜索
import React from "react"
import styled from 'styled-components'
import {NavBar,Icon}from 'antd-mobile'

const SearchDiv = styled.div`
background-color:#EFEFF4;
height: 100%;
`;
const SearchInput = styled.input`
width: 72vw;
border: none;
outline: none;
background-color:#fff;
border-radius: 3px;
height: 30px;
color: #B5B5B5;
font-size: 12px;
line-height: 30px;
padding-left: 10px;
`;

const SearchTagTitle = styled.p`
margin-top: 10px;
padding-left: 5px;
margin-bottom: 8px;
padding-bottom: 0;
`;

const SearchTag = styled.span`
border: 1px solid #ccc;
border-radius: 5px;
height: 27px;
padding: 0 10px;
margin: 3px 5px;
display: inline-block;
line-height: 27px;
`;
const data = [
    {
        title:"热门搜索",
        tags:["护肤","手表","钱包","香水","烟酒","保健品","腰带"]
    }
];
class Search extends React.Component{
    render() {
        return(
            <SearchDiv className="search">
                <NavBar style={{backgroundColor:"#2F2F2F"}} icon={<Icon  type="left" />}
                        onLeftClick={() => window.history.go(-1)}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '6px' }} />,
                        ]}
                >
                    <SearchInput type="text"/>
                </NavBar>
               <div style={{padding:"45px 5px 0 5px",fontSize:"14px"}}>
                   <SearchTagTitle>热门搜索</SearchTagTitle>
                   <div>
                       {
                           data[0].tags.map((item,index)=>{
                               return(
                                   <SearchTag key={index}>{item}</SearchTag>
                               )
                           })
                       }
                   </div>
               </div>
            </SearchDiv>
        )
    }
}

export default Search
