import React, {Component} from 'react'
import style from './index.scss'
import {Menu} from 'antd'
import { Link } from 'dva/router'

  export default class indexPage extends Component {
    constructor(props){
      super(props);
      this.state={
        selectedKeys:[],
      }
    }

    componentDidMount(){
      this.handleSetSelectedKeys(this.props.location.pathname)
    }

    // 处理手动输入路由后页面跟随刷新的方法
    handleSetSelectedKeys(pathname){
      const temp = pathname.split('/');
      const key = temp && temp.length < 2 ? 'home':temp[1];
      this.setState({selectedKeys:[key]})
    }

    render(){
      return (
        <nav className={style.header}>
          <a href="http://baidu.com" className={style.logo}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="d-block mx-auto"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                <line x1="9.69" y1="8" x2="21.17" y2="8" />
                <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                <line x1="14.31" y1="16" x2="2.83" y2="16" />
                <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
              </svg>
          </a>
          <Menu 
          className={style["menu-left"]} 
          mode="horizontal" 
          defaultSelectedKeys={["home"]}
          selectedKeys={this.state.selectedKeys}>
              <Menu.Item key={"home"}>
                <Link to="/home">主页</Link>
                </Menu.Item>
              <Menu.Item key={"menus"}>
                <Link to="/menus">菜单</Link>
                </Menu.Item>
              <Menu.Item key={"admin"}>
                <Link to="/admin">管理</Link>
                </Menu.Item>
              <Menu.Item key={"about"}>
                <Link to="/about">关于我们</Link>
                </Menu.Item>
              <Menu.Item className={style.login} key={"login"}>
                <Link to="/login">登录</Link>
                </Menu.Item>
              <Menu.Item className={style.register} key={"register"}>
                <Link to="/register">注册</Link>
                </Menu.Item>
          </Menu>
        </nav>
      )
    }
}
