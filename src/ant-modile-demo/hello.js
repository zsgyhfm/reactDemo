import React from 'react'
import {Button,WhiteSpace,Flex}from 'antd-mobile'
import FlexItem from "antd-mobile/es/flex/FlexItem";
import styled from "./index.css"
class Hello extends React.Component{
    render() {
        return(
            <div className="hello">
                <Button type="primary">ant button</Button><WhiteSpace/>
                <Button type="warning" icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>warning</Button><WhiteSpace />

                <div className="flex-container">
                    <Flex>
                        <FlexItem >123</FlexItem>
                        <FlexItem>123</FlexItem>
                        <FlexItem>123</FlexItem>
                    </Flex>
                    <WhiteSpace size="lg"/>
                    <Flex wrap="wrap">
                        <FlexItem>1</FlexItem>
                        <FlexItem>2</FlexItem>
                        <FlexItem>3</FlexItem>
                        <FlexItem>4</FlexItem>
                        <FlexItem>5</FlexItem>
                        <FlexItem>6</FlexItem>
                        <FlexItem>7</FlexItem>
                        <FlexItem>8</FlexItem>
                    </Flex>
                </div>

            </div>
        )
    }
}

export default Hello
