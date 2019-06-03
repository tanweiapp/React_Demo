import React from 'react';
import ReactDOM from 'react-dom';
export  default class Add extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.router);
        this.state={
            title:'',
            singer:''
        }
    }
    render() {
        return(
            <div>
                <header>
                    <h2 className="title">
                        播放列表
                    </h2>
                    <input
                        type="text"
                        placeholder="输入歌曲名字"
                        onChange={(e)=>{
                            this.setState({title:e.target.value})
                        }}
                    />
                    <input
                        type="text"
                        placeholder="输入歌手名字"
                        onChange={(e)=>{
                            this.setState({singer:e.target.value})
                        }}
                    />
                    <input
                        type="button"
                        value="添加音乐"
                        onClick={()=>{
                            this.props.add(this.state.title,this.state.singer);
                            this.setState({title:'',singer:''});
                            this.props.router.history.push("/")
                        }}
                    />

                </header>
            </div>
        );
    }
}