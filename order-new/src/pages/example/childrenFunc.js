import React, { Component } from 'react'
import style from './index.scss'


const options = [
    { name: 'Red', val: 'red' },
    { name: 'Orange', val: 'orange' },
    { name: 'Blue', val: 'blue' }
];

class Selector extends Component {
    constructor (props) {
        super(props);
        this.state = {
            val: 'red',
        }
      }
      handle = (data) => {
          
        this.setState({
          val: data.val,
        })
    }
    render(){
        return (
            <div className = 'wrap'>
                 <ul>
                     { this.props.options.map( data => (
                      <li key = { data.val }
                            className = { `item ${ this.state.val == data.val ? 'selected' : '' }` }
                            onClick = { () => this.handle(data) }  >
                            { data.name }
                        </li>
                     ))}
                 </ul>
                 { /* 
                 函数作为子组件,子组件只提供了固定样式，可以根据数据的改变通知父组件
                 由父组件动态的对子组件进行元素样式添加更改。
                 这是关键 ，下面的代码调用子组件（函数），渲染出那一种颜色 

                */ }
                 { this.state.val && this.props.children(this.state.val)} 
                 {/* <div style={{
                        width: "50px",
                        height: "50px",
                        background: this.state.val
                      }}></div> 
                      
                      */}
            </div>
        );
    }
}



export default class ChildrenFunc extends Component {
    render() {
        return (
            <Selector options = {options}>
                {data =>(
                     <div style = {{
                        width: "50px",
                        height: "50px",
                        background: data
                      } }/>  
                )
                }
            </Selector>
        )
    }
}
