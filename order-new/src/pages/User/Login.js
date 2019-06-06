import React, { Component } from 'react'
import style from './account.scss'
import Logo from 'Assets/icon.png'
import { Form, Icon, Input, Button } from 'antd';

class Login extends Component {
    render() {
        return (
            <div className={style.account}>
                <img src={Logo} alt="my logo" className={style.logo}/>
                <Form className="account-form">
                    <Form.Item label="邮箱">
                    <Input />
                    </Form.Item>
                    <Form.Item label="密码">
                    <Input type="password"/>
                    </Form.Item>
                    
                    <Form.Item >
                    <Button className="btn" type="primary">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default  Form.create()(Login);