import React from 'react';
import { connect } from 'dva';
import {Switch,Route,Redirect} from 'dva/router'
import { Layout , Menu, Breadcrumb} from 'antd';
import NavBar from './NavBar/indexPage'
import Home from './Home/indexPage'
import Admin from './Admin/index'
import About from './About/index'
import Menus from './Menus/index'
import Login from './User/Login'
import Register from './User/Register'

import styles from './IndexPage.scss'

const { Header, Content, Footer } = Layout;

function IndexPage(props) {
  return  (
  <Layout className={styles.layout}>
    <Header className={styles.header}>
      <NavBar {...props}/>
    </Header>
    <Content className={styles.content}>
      {/* 一级路由 */}
      <Switch >
        <Route path='/home' component={Home}/>
        <Route path='/menus' component={Menus}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        {/* 重定向  */}
        <Redirect  to="/home"/>
        
      </Switch>
    </Content>
  </Layout>
  )
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
