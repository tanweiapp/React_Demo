import React from 'react'
import {Route, Redirect} from 'dva/router'
import NoMatch from '../compontents/NoMatch'
import dynamic from 'dva/dynamic';
import { connect } from 'dva';

// export default function SubRoutes(route) {
//     console.log(route)
//     return (
//         <Route render={props=> <route.component {...props} routes={route.routes} />}/>
//     )
// }

// 解决动态加载路由组件的方法
const dynamicComponent = (app,models,component,routes, isAuthority, userInfo) => 
dynamic({
  app,
  models: () => models,
  component: () =>
    component().then(res=>{
      if(isAuthority){ // 是否含有路由开关
        if(!userInfo.id){ // 是否有 userInfo.id
          return ()=><Redirect to="/login"/> //未登录状态重定向到登录页面中
        }
      }
       const Component = res.default || res;
       return props => <Component {...props} app={app} userInfo={userInfo} routes={routes}/>
  })
});

function SubRoutes({routes,component,app,model, isAuthority,userInfo}) {
  console.log(userInfo)
   return (
       // 封装路由组件（路由全部加载）
        // <Route render={props=><Component {...props} routes={routes}/>}/>

        // 动态加载路由，通过DVAJS 提供的动态函数进行传值加载
        <Route component={dynamicComponent(app,model,component,routes,isAuthority,userInfo)} />
    )
}

// 重定向封装组件
export  function RedirectRoute({routes,from, exact}) {
    const routeR = routes.filter(item=>{
        return item.redirect;
    });
    const to = routeR.length ? routeR[0].path : routes[0].path; 
    return <Redirect exact={exact} from={from} to={to}/>;
 }

 // 封装404错误页面
 export  function NoMatchRoute({status=404}) {
    return <Route render={props=><NoMatch {...props} status={status}/>}/>;
 }

 // 链接,关联global
 export default connect(({global})=>({
  userInfo:global.userInfo
}))(SubRoutes);