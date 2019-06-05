import React from 'react';
import { Router, Switch } from 'dva/router';
// import IndexPage from './pages/IndexPage';
// import Home from './pages/Home/indexPage'
// import About from './pages/About/index';
// import Admin from './pages/Admin/index';
// import Menus from './pages/Menus/index';
// import Login from './pages/User/Login';
// import Register from './pages/User/Register';
import SubRoutes from './utils/SubRoutes'

// 设置私有路由开关
const isAuthority = true; 

const RouteConfig = [
  {
    path:"/",
    component:() => import("./pages/IndexPage"), // 动态加载路由组件
    // component:IndexPage,
    model:[],
    routes:[
      {
        path:"/home",
        component:() => import("./pages/Home/indexPage"),
        model:[import('./models/home')],
        redirect:true,
        isAuthority
      },
      {
        path:"/menus",
        component:() => import("./pages/Menus/index"),
        model:[],
        isAuthority
      },
      {
        path:"/admin",
        component:() => import("./pages/Admin/index"),
        model:[],
        isAuthority
      },
      {
        path:"/about",
        component:() => import("./pages/About/index"),
        model:[],
        isAuthority,
        routes:[
          {
            path:"/about/history",
            component:() => import("./pages/About/History"),
            model:[],
          },
          {
            path:"/about/delivery",
            component:() => import("./pages/About/Delivery"),
            model:[],
          },
          {
            path:"/about/orderingguide",
            component:() => import("./pages/About/OrderingGuide"),
            model:[],
          },
          {
            path:"/about/contact",
            component:() => import("./pages/About/Contact"),
            model:[],
            routes:[
              {
                path:"/about/contact/phone",
                component:() => import("./pages/About/Phone"),
                model:[],
              },
              {
                path:"/about/contact/address",
                component:() => import("./pages/About/Address"),
                model:[],
              }
            ]
          },
        ]
      },
      {
        path:"/login",
        component:() => import("./pages/User/Login"),
        model:[]
      },
      {
        path:"/register",
        component:() => import("./pages/User/Register"),
        model:[]
      }
    ]
  }
];


function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/"  component={IndexPage} /> */}
        {RouteConfig.map((route,i)=>(
          //调用封装组件
          <SubRoutes key={i} {...route} app ={app}/>
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
