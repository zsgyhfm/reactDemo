import React from 'react'
import styled from 'styled-components'
import "./GoodsWraper.css"
const Wrapper = styled.div`
display: flex;
flex-flow:row wrap ;
align-content: space-around;
justify-content: space-around;
height: 2.94rem;
width: 100%;
padding: 0.2rem 0.2rem;
`;
const Goods = styled.div`
width: 49%;
height: 1.2rem;
display: flex;
flex-flow: row nowrap;
align-content: flex-start;
justify-content: space-around;
background-color:#F8F8F8;
//margin-top: 10px;
//background-color:red;
`;


class GoodsWraper extends React.Component {
    render() {
        return (
            <Wrapper>
                <Goods>
                    <img className={"imgLink"} src={"http://demo.demohuo.top/modals/17/1779/demo/images/aa.png"} alt=""/>
                    <div className={"itemLinkWrapper"}>
                        <a className={"itemLink"} href={""}>面膜区</a>
                        <a className={"itemLink "} href={""}>立即进入</a>
                    </div>
                </Goods>
                <Goods>
                    <img className={"imgLink"} src={"http://demo.demohuo.top/modals/17/1779/demo/images/aa.png"} alt=""/>
                    <div className={"itemLinkWrapper"}>
                        <a className={"itemLink"} href={""}>面膜区</a>
                        <a className={"itemLink "} href={""}>立即进入</a>
                    </div>
                </Goods>
                <Goods>
                    <img className={"imgLink"} src={"http://demo.demohuo.top/modals/17/1779/demo/images/aa.png"} alt=""/>
                    <div className={"itemLinkWrapper"}>
                        <a className={"itemLink"} href={""}>面膜区</a>
                        <a className={"itemLink "} href={""}>立即进入</a>
                    </div>
                </Goods>
                <Goods>
                    <img className={"imgLink"} src={"http://demo.demohuo.top/modals/17/1779/demo/images/aa.png"} alt=""/>
                    <div className={"itemLinkWrapper"}>
                        <a className={"itemLink"} href={""}>面膜区</a>
                        <a className={"itemLink "} href={""}>立即进入</a>
                    </div>
                </Goods>
            </Wrapper>
        )
    }
}
export default GoodsWraper
