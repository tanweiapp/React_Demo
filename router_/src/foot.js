import React from 'react';
import ReactDOM from 'react-dom';
export  default class Foot extends React.Component{
    render() {
        return(
            <footer>
                <div className="info">
                    <span>共3首歌曲</span>
                    <span>当前选中3首</span>
                </div>

<div>ss</div>
                <input
                    type="button"
                    value="删除选中歌曲"
                    onClick={(e)=>{

                    }}
                />
                <input
                    type="button"
                    value="收藏选中歌曲"
                />
                <input
                    type="button"
                    value="取消收藏选中歌曲"
                />
                <input
                    type="button"
                    value="查看收藏列表"
                />
                <input
                    type="button"
                    value="查看所有列表"
                />
            </footer>

        );
    }
}