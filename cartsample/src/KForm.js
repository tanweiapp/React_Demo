import React, { Component } from '../node_modules/@types/react'
import { Button } from '../node_modules/antd/lib';

// 高阶组件： 扩展现有表单，提供控件包装，事件处理，表单验证
function kFormCreate(Comp){
    return class extends React.Component{
        constructor(props){
            super(props);
            //选项
            this.options={};
            // 数据模型
            this.state={};
        }
        handleChange = (e) => {
            const{name,value} = e.target;
            this.setState({[name]:value})
            // 单字段校验
            this.validateField(name);
        }
        validateField = (field) => {
            
        }
        getFieldValidate = (fileld,options)=>{
            this.options[fileld] = options;
            // 返回高阶组件
            return InputComp => (
                <div>
                    {
                        React.cloneElement(InputComp,{
                            name:fileld,
                            value:this.state[fileld] || ' ',
                            onChange:this.handleChange
                        })
                    }
                </div>
            )
        }
        render (){
            return <Comp getFieldValidate={this.getFieldValidate}></Comp>
        }
    }
}

@kFormCreate
 class KFormTest extends React.Component {
    render(){
        const { getFieldValidate } = this.props;
        // 通过解构的方式获取装饰组件中的函数对象
        return (
            <div>
            <div>
                { getFieldValidate('userName',{
                        rules:[{require:true,message:"please input your username!"}]
                    })(<input type="text"/>)}
            </div>
           
            <input type="password"/>
            <Button >登录</Button>
            </div>
          )
    }
  
}

export default  KFormTest;
