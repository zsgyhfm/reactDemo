import React,{PureComponent} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './CommentApp.css'
class CommentApp extends PureComponent{

    render() {
        const title ="留言板";
        return(
            <div className="comment">
               <h2> {title}</h2>
                <CommentInput/>
                <CommentList/>
            </div>
        )
    }
}

export default CommentApp
