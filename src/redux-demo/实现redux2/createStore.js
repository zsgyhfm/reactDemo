//将store放到context上面
import React from 'react'
import PropsType from 'prop-types'
const createStore = (WraperComponent)=>{
    class CreateStore extends React.Component{
        static childContextTypes = {
            store:PropsType.object
        };
        getChildContext(){
            return{store}
        }
        render() {
            return <WraperComponent/>
        }
    }
}
