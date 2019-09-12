import React, { Component} from '../node_modules/@types/react'


// 创建一个函数接收一个组件返回另一个组件
function HocExample (Component) {
    const NewComponent = (props) => {
        return <Component {...props} stage="react"/>
    }
    return NewComponent;
};
// 添加功能：日志；记录
function withLog(Component){
console.log( Component.name + '加强了' )
    return props => {
        return <Component {...props} />
    }
}

@withLog
@HocExample
@withLog
class Example extends Component {
    render(){
        return (
            <div>
                {this.props.stage} - {this.props.name}
            </div>
        );
    }
}


export default Example; //withLog(HocExample(withLog(Example)))