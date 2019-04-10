//高阶组件 从context中取得store{getstate和dispatch} 传递给组件的props
import store from './store'
import React from 'react'
import PropTypes from 'prop-types'
//1.传入一个组件  返回一个函数，此函数需要再传入一个 指定需要传入的props值的函数

/**
 * 高阶组件 从context中取得store{getstate和dispatch} 传递给组件的props
 * @param WrapperComponet 接收数据的组件
 * @returns {Function}
 */
const connect = (WrapperComponet) =>{

    return
    /**
     *
     * @param mapStateToProps 为组件指定需要接收的数据
     */
    (mapStateToProps,dispatchToProps) => {
        class Connect extends React.Component {
            static contextTypes = {
                store: PropTypes.object
            }

            render() {
                //取得store中的数据
                const {store} = this.context;
                //根据传入函数 来接收指定的数据，传入到组件的props里面
                const data = mapStateToProps(store)
                const dispath = dispatchToProps?dispatchToProps(store.dispath):{}

                let allp = {
                    ...data,...dispath
                }
                return (
                    <WrapperComponet {...allp}/>
                )
            }
        }
}

//上面的写法是为了注释
