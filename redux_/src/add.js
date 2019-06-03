import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from "react-redux"

class Add extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            singer:""
        }
    }

    getBack(){
        if(this.props.data.length>0){
           return (
               <a
                   className="backLink"
                   onClick={()=>{
                       this.props.history.goBack();
                   }}
               >返回</a>
           );
        }
    }

    render(){
        return(
            <header>
            <h2 className="title">
                播放列表
                {this.getBack()}
            </h2>
            <input
            type="text"
            placeholder="输入歌曲名字"
            value={this.state.title}
            onChange={
                (e)=>{
                    this.setState({
                        title :e.target.value
                    })
                }
            }
        />
        <input
        type="text"
        placeholder="输入歌手名字"
        value={this.state.singer}
        onChange={
        (e)=>{
            this.setState({
                singer :e.target.value
            })
        }}
        />
        <input
            type="button"
            value="添加音乐"
            onClick={()=>{
                this.props.dispatch({
                    type:"ADD",
                    title:this.state.title,
                    singer:this.state.singer
                })
                this.setState({
                    title:"",
                    singer:""
                });
                this.props.history.push("/")
            }}
        />

        </header>
        );
    }
}
export  default connect((state)=>state)(Add);