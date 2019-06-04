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
import indexPage from './pages/Home/indexPage';

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
        model:[],
        redirect:true
      },
      {
        path:"/menus",
        component:() => import("./pages/Menus/index"),
        model:[]
      },
      {
        path:"/admin",
        component:() => import("./pages/Admin/index"),
        model:[]
      },
      {
        path:"/about",
        component:() => import("./pages/About/index"),
        model:[]
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
