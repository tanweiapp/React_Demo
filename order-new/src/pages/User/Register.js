import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { email_reg } from '../../utils/Regexp.js'
import Logo from 'Assets/icon.png'
import style from './account.scss'


 class Register extends Component {
    state = {
       email:'452567933@qq.com' 
    }

    //自定义校验规则
    validatorForm =  (rule, value, callback) => {
        if (value && rule.pattern && !value.match(rule.pattern)) {
          callback(rule.message);
        } else {
          callback();
        }
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.account}>
                <img src={Logo} alt="my logo" className={style.logo}/>
                <Form className="account-form">
                    <Form.Item label="邮箱">
                        {getFieldDecorator('email', {
                            initialValue:this.state.email,
                            rules:[
                                {
                                    required:true,
                                    message:'邮箱不能为空'
                                },{
                                   pattern:email_reg,
                                   validator:this.validatorForm,
                                   message:'请输入正确的邮箱'
                                }
                            ]
                        })(<Input />)}
                    </Form.Item> 
                    <Form.Item label="密码">
                    <Input type="password"/>
                    </Form.Item>
                    <Form.Item label="确认密码">
                    <Input type="password"/>
                    </Form.Item>
                    <Form.Item >
                    <Button className="btn" type="primary">注册</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default  Form.create()(Register);