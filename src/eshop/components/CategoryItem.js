import React,{Fragment} from 'react'
import nf from '../images/22.png'

class CategoryItem extends React.Component{
    render() {
        return(
            <div className={"CategoryItem"}>
                <p>{this.props.items.title}</p>
                <div>

                {
                    this.props.items.urls.map((item,index)=>{
                       return(
                           <Fragment key={index}>

                                   <div className={"item"}>
                                       <p>奶粉</p>
                                       <img src={nf} alt=""/>
                                   </div>

                           </Fragment>
                       )
                    })
                }
                </div>
            </div>
        )
    }
}

export default CategoryItem
