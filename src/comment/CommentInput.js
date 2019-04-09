import React,{PureComponent} from 'react'

class CommentInput extends PureComponent{
    render() {
        return(
            <div className='comInp'>
                <ul>
                    <li>
                    <label>用户名:</label><input type="text" placeholder="用户名"/>
                    </li>
                    <li>
                        <label>内容:</label> <textarea placeholder="内容"></textarea>
                    </li>
                    <li>
                        <input type="submit"/>
                    </li>
                </ul>
            </div>
        )
    }
}
export default CommentInput
