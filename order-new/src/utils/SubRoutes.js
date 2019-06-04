import React from 'react'
import {Route, Redirect} from 'dva/router'
import NoMatch from '../compontents/NoMatch'
import dynamic from 'dva/dynamic';

// export default function SubRoutes(route) {
//     console.log(route)
//     return (
//         <Route render={props=> <route.component {...props} routes={route.routes} />}/>
//     )
// }

// 解决动态加载路由组件的方法
const dynamicComponent = (app,models,component,routes) => 
dynamic({
  app,
  models: () => models,
  component: () =>
    component().then(res=>{
       const Component = res.default || res;
       return props => <Component {...props} app={app} routes={routes}/>
  })
});

export default function SubRoutes({routes,component,app,model}) {
   return (
       // 封装路由组件（路由全部加载）
        // <Route render={props=><Component {...props} routes={routes}/>}/>

        // 动态加载路由，通过DVAJS 提供的动态函数进行传值加载
        <Route component={dynamicComponent(app,model,component,routes)} />
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

 // 封装404c错误页面
 export  function NoMatchRoute({status=404}) {
    return <Route render={props=><NoMatch {...props} status={status}/>}/>;
 }

 