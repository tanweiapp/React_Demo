import React from 'react';
import { connect } from 'dva';
import {Switch } from 'dva/router'
import { Layout } from 'antd';
import NavBar from './NavBar/indexPage'
// import Home from './Home/indexPage'
// import Admin from './Admin/index'
// import About from './About/index'
// import Menus from './Menus/index'
// import Login from './User/Login'
// import Register from './User/Register'
import SubRoutes, {RedirectRoute, NoMatchRoute}from '../utils/SubRoutes'
import styles from './IndexPage.scss'

const { Header, Content } = Layout;

function IndexPage(props) {

const {routes, app} = props

  return  (
  <Layout className={styles.layout}>
    <Header className={styles.header}>
      <NavBar {...props}/>
    </Header>
    <Content className={styles.content}>
      {/* 一级路由 */}
      <Switch >
        {/* <Route path='/home' component={Home}/>
        <Route path='/menus' component={Menus}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/> */}
        {/* 重定向  */}

        {routes.map((route,i)=>(
          //调用封装组件
          <SubRoutes key={i} {...route} app={app}/>
        ))}
        {/* 
        重定向方式：
          如果路由中没有redirect:true(通过循环渲染重定向)
          则默认第一路由为重定向路由
           <Redirect exact={true} from="/" to="/home"/>
         */}
        {/* <Redirect  to="/home"/> */}
        <RedirectRoute exact={true} from={"/"} routes={routes} />
        {/* 输入的链接不存在是，跳转到NoMatch */}
        <NoMatchRoute />
      </Switch>
    </Content>
  </Layout>
  )
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
