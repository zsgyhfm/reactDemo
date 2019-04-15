import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Item = styled.div`
height: 100%;
text-align: center;
width: 100%;
background-color:${props=>props.action===1?"#ED3037":"#2F2F2F"};
padding-top: 4px;
`;

const BarTitle = styled.p`
margin: 5px;
padding: 0;
color:${props=>props.action===1?"#FCFAFA":" #C4C4C4"}
`;


class BarItem extends React.Component {
    render() {
        const {action,title}=this.props;
        return (
            <Item action={action}>
                <Link to={this.props.path}>
                    <img src={action===1?this.props.iconActive:this.props.icon} alt="" width={"22px"} height={"19px"}/>
                    <BarTitle action={action}>{title}</BarTitle>
                </Link>
            </Item>
        )
    }
}

export default BarItem
