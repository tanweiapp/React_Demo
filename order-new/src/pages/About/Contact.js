import React, { Component } from 'react'
import SubRoutes,{RedirectRoute} from '../../utils/SubRoutes'
import { Switch, Link } from 'dva/router'
import style from './TabPane.scss'

export default class componentName extends Component {
  render() {
    const {routes, app,userInfo} = this.props;
    console.log('userInfo' + JSON.stringify(userInfo));
    return (
      <div className={style.tabpane}>
       <p className={style.title}>联系我们</p> 
       <div className={style.content}>
           <Link to="/about/contact/phone">电话</Link>
           <Link to="/about/contact/address">地址</Link>
       </div>
       <div className={style.info}>
           {/* 三级路由 */}
               <Switch >
                   {routes.map((route,i)=>(
                   //调用封装组件
                   <SubRoutes key={i} {...route} app={app}/>
                    ))}
                   <RedirectRoute exact={true} from={"/about/contact"} routes={routes} />
                </Switch>

       </div>
       

      </div>
    )
  }
}
