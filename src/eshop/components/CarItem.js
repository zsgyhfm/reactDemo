import React from 'react'
import styled from 'styled-components'
import xuanzhong from "../images/xuanzhong.png"
import quxiao from "../images/kongbai.png"
import propsType from 'prop-types'
const Check = styled.div`
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #000;
    padding-left: 0.76rem;
    background:#fff url(${props => props.buyAll ? xuanzhong : quxiao}) no-repeat 10px center;
    background-size: 0.4rem 0.4rem;
    border-bottom: 1px solid #EEEEEE;
`;

const Item = styled.div`
width: 6.4rem;
height: 2.32rem;
padding: 0.2rem 0 0.3rem 0.76rem;
font-size: 0.12rem;
background:#fff url(${props => props.selected ? xuanzhong : quxiao}) no-repeat 10px center;
margin-bottom: 10px;
background-size: 0.4rem 0.4rem;
`;

class CarList extends React.Component {
    constructor(){
        super();
        this.state={
            // count:1,
            data:propsType.Array,
            amount:0,
            total:0

        };
        //改变购买数量
        this.handleChangeCount=(data,e)=>{
            if(e.target.nodeName==="BUTTON"){
                this.state.data[data[1]].count+=data[0];
                this.setState({
                    data:this.state.data
                })
            }

        };


        //item选中
        this.handleItemSelected=(index,e)=>{
           // console.log(e.target.className)
            let classn = e.target.className.indexOf("caritem");
            if(classn!==-1){
                this.state.data[index].selected=!this.state.data[index].selected;
                this.setState({
                    data:this.state.data
                })
            }


        }
    }
    //点击全选
    selectAll(e){
        //计算总额和总数
        // const {total,amount}=this.state;
        // this.props.selectAll({total,amount});

        let title = e.target.innerText;
        if(title==="全选"){
            this.state.data.map(item=>{
                item.selected=true;
                return item;
            })
        }else {
            this.state.data.map(item=>{
                item.selected=false;
                return item;
            })
        }
        this.setState({
            data:this.state.data
        })
    };
    //将结果传递出给父组件
    handleResult(data){
        console.log("子组件传递数据",data)
        this.props.computed(data)
    }

    componentWillMount() {
        this.setState(
            {
                data:this.props.dataList,
                buyAll :this.props.buyAll
            }
        )
    }
    //更新购物车数据
    componentWillUpdate(nextProps, nextState, nextContext) {
        //这里只计算总额
       // console.log(nextState);
        let amount = 0;
        let total =0;
        nextState.data.map(item=>{
            if(item.selected){
                total+=item.count;
                amount+=item.price*item.count
            }
            return item
        });
        nextState.total=total;
        nextState.amount=amount;


    }
    //数据更新完毕后 传递出去，
    componentDidUpdate(prevProps, prevState, snapshot) {
        //将值传递出去

        // console.log("更新完毕")
        // console.log("总量："+this.state.total+"总额："+this.state.amount)
        const {amount,total}=this.state;
        this.handleResult({amount,total})
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state !== nextState;
    }

    render() {
        const {buyAll} = this.props;

        return (
            <div className={"carList"}>
                <Check className={"all"} onClick={this.selectAll.bind(this)} buyAll={buyAll} computed={this.handleResult.bind(this)}>{buyAll ? "取消" : "全选"}</Check>
                {
                    this.state.data.map((item,index)=>{
                        return(
                            <Item className={"caritem"} buyAll={buyAll} key={index} onClick={this.handleItemSelected.bind(this,index)} selected={item.selected}>
                                <div className={"goods"}>
                                    <img src={item.img} alt="goods"/>
                                </div>
                                <div className={"goodsContent"}>
                                    <p className={"title"}>{item.title}</p>
                                    <p className={"tag"}>{item.detail}</p>
                                    <div className={"price"}>
                                        <div className={"price_num"}>￥{(item.price*item.count).toFixed(2)}</div>
                                        <div className={"goodscount"}>
                                            <button className={"goodsSub"} onClick={this.handleChangeCount.bind(this,[-1,index])}>-</button>
                                            <span className={"goodsSub"}>{item.count}</span>
                                            <button className={"goodsSub"}onClick={this.handleChangeCount.bind(this,[+1,index])}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                        )
                    })
                }
            </div>
        )
    }
}

export default CarList
