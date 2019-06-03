import React from 'react';
import  Item from './item'

export  default  class  Main extends  React.Component{

    render(){
        console.log(this.props);
        let data = this.props.data;
        return(
            <table className="main">
                <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            id="checkAll"
                            checked={this.props.checkAll}
                            onChange={(e)=>{
                                this.props.setCheckAll(e.target.checked);
                            }}
                        />
                        <label htmlFor="checkAll">全选</label>
                    </th>
                    <th>歌曲</th>
                    <th>歌手</th>
                    <th>收藏</th>
                    <th>删除</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((value,index)=>{
                        return(
                            <Item
                                data={value}
                                key={index}
                                index = {value.id}
                                setCheck = {this.props.setCheck}
                                setLike = {this.props.setLike}
                                remove={this.props.remove}
                            />
                        );
                    })
                }
                </tbody>

            </table>
        );
    }
}