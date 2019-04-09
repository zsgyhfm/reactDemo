import React,{PureComponent} from 'react'
import CommentItem from './CommentItem'
class CommentList extends PureComponent{
    render() {
        return(
            <div className="comList">
                <CommentItem/>
            </div>
        )
    }
}

export default CommentList
