import React from 'react'
import styled from 'styled-components'
import look from "../images/look.png";

const Look = styled.div`
height: 1rem;
width: 100%;
background-color: #F0F0F0;
margin-top: 3px;
padding-left: 30px;
`;
const LookImg = styled.div`

height: 1rem;
width: 1.6rem;
background: url(${look})no-repeat center;
background-size: 1.6rem 1rem;
float: left;
`;

class HomeLook extends React.Component {
    render() {
        const {url, text} = this.props;
        return (
            <Look>
                <LookImg></LookImg>
                <div className={"lookTitle"} >
                    <p>{text ? text : "水果热销排行榜"}</p>
                    <p style={{height:"0.38rem"}}><a href={url ? url : "http://google.com"}>点击查看>></a></p>
                </div>
            </Look>
        )
    }
}

export default HomeLook
