import React from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,Switch,Redirect } from 'react-router-dom';
import Main from './main'
import Footer from './foot'

export default class Home extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <header>
                    <h2 className="title">
                        播放列表
                        <Link to="/add" className="addLink">添加歌曲</Link>
                    </h2>
                </header>
                <Link to="/">所有列表</Link>
                <Link to="/like">收藏列表</Link>

                <Route path="/" exact render={()=>{
                    return(
                        <Main
                            data={this.props.data}
                            checkAll={this.props.checkAll}
                            setCheckAll={this.props.setCheckAll}
                            setCheck={this.props.setCheck}
                            setLike = {this.props.setLike}
                            remove={this.props.remove}
                        />
                    );
                }}/>
                <Route path="/like" exact render={()=>{
                    return(
                        <Main
                            data={this.props.data}
                            checkAll={this.proos.checkAll}
                            setCheckAll={this.props.setCheckAll}
                            setLike = {this.props.setLike}
                            remove={this.props.remove}
                        />
                    );
                }}

                />
                <Footer

                />
            </div>
        );
    }
}