import React from 'react'
import style from './index.scss'
import { connect } from 'dva'

 function indexPage(props) {
    return (
        <div className={style.home}>
            <div className={style.background}>
                <h1>欢迎大家来到这里</h1>
                <h2>这里有大家喜欢的小吃</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

//关联home.js 和当前组件
export default connect(({home})=>({...home}))(indexPage);