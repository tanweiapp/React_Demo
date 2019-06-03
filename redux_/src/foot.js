import  React from "react";
import { Link, } from 'react-router-dom';
import {connect} from "react-redux";

 class Footer extends React.Component{

    render(){
        let length = this.props.length;
        let selectLength = this.props.selectLength;
        let likeLength = this.props.likeLength;
        let pathName = this.props.pathName;
        return(
            <footer style={{
                display:length ? "table" : "none"
            }}>
                <div className="info">

                    <span>共{length}首歌曲</span>
                    <span
                        className ="align-right"
                        style={{
                             display:selectLength ? "block" : "none"
                        }}
                    >
                        当前选中{selectLength}首歌曲
                    </span>
                </div>
                <input
                    type="button"
                    value="删除选中歌曲"
                    style={{
                        display:selectLength?"inline-block":"none"
                    }}
                    onClick={()=>{
                        // this.props.removeSelect();
                        this.props.dispatch({
                            type:"REMOVE_SELECTED"
                        })
                    }}
                />
                <input
                    type="button"
                    value="收藏选中歌曲"
                    style={{
                        display:selectLength?"inline-block":"none"
                    }}
                    onClick={()=>{
                        this.props.dispatch({
                            type:"LIKE_SELECTED"
                        })
                        // this.props.likeSelect();
                    }}
                />
                <input
                    type="button"
                    value="取消收藏选中歌曲"
                    style={{
                        display:selectLength?"inline-block":"none"
                    }}
                    onClick={()=>{
                        // this.props.cancelLikeSelect();
                        this.props.dispatch({
                            type:"CANCEL_LIKE_SELECTED"
                        })
                    }}
                />
                {(pathName === '/' && likeLength>0) ? <Link to="/like">查看收藏列表</Link>:" "}
                {pathName === '/like' ? <Link to="/">查看所有列表</Link>:" "}
            </footer>
        );
    }
}

export default connect((state,props)=>{
    var  data = {};
    data.length = state.data.length;
    data.selectLength = state.data.filter((item)=>item.selected).length;
    data.likeLength = state.data.filter((item)=>item.like).length;
    return data;
})(Footer);