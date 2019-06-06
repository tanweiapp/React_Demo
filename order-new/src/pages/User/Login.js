import React, { Component } from 'react'
import { Form, Icon, Input, Button, Message } from 'antd';
import { email_reg, pwd_reg } from '../../utils/Regexp.js'
import { connect } from 'dva'
import Request from '../../utils/request'
import style from './account.scss'
import Logo from 'Assets/icon.png'

@connect()
class Login extends Component {
    state = {
        email:'452567933@qq.com' 
     }
    handleSubmit=(e)=>{
        e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
       const{email,pwd} = values
       Request("users.json").then(res=>{
        // console.log(res);
        const{data, status} = res;
        if(res && status === 200 && data) {
            let users = [];
            for (const key in data) {
                console.log(key);
                users.push({
                    ...data[key],
                    key
                })
            }
           
           users=users.filter((user)=>{
            return user.pwd === pwd && user.email === email;
           });
            //    console.log(users);
           if(users && users.length) {
               // 存储到localStorage
               localStorage.setItem("email",users[0].email);
               localStorage.setItem("key",users[0].key);
               //存储到models
               this.props.dispatch({
                   type:"global/setUserInfo",
                   payload:users[0]
               }).then(()=>{
                   this.props.history.push('/')
               })
               //页面跳转
           }else{
            Message.error('邮箱或密码错误，请重新输入！')
           }
        }  
       });
      }
    });
    }
    //自定义校验规则
    validatorForm =  (rule, value, callback) => {
        if (value && rule.pattern && !value.match(rule.pattern)) {
          callback(rule.message);
        } else {
          callback();
        }
      };
       // 自定义校验两次密码是否一致
  validatorPwd = (rule, value, callback) => {
    if (value !== this.props.form.getFieldValue('pwd')) {
      callback(rule.message);
      return;
    }
    callback();
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
                        {getFieldDecorator('pwd',{
                            rules:[
                                {
                                    required:true,
                                    message:'密码不能为空，请输入密码！'
                                },{
                                    pattern:pwd_reg,
                                    validator:this.validatorForm,
                                    message:'请输入6~16位密码'
                                }
                            ]
                        })( <Input  maxLength={16}
                            type="password"
                            placeholder="请输入6-16位字母、数字或特殊字符的密码"/>)}
                    </Form.Item>
                    
                    <Form.Item >
                    <Button onClick={this.handleSubmit} className="btn" type="primary">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default  Form.create()(Login);