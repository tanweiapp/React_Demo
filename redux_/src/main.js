import  React from "react";
import Item from './item'
import {connect} from  "react-redux"
 class Mian extends React.Component{
    render(){
        let data = this.props.data;
        console.log('this.props.isCheckAll' + this.props.isCheckAll);
        return(
            <table className="main"
                   style={{
                       display: data.length ? "table" : "none"
                   }}
            >
                <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            id="checkAll"
                            checked={this.props.isCheckAll}
                            onChange={(e)=>{
                                this.props.dispatch({
                                    type:"CHECK_ALL",
                                    checked:e.target.checked
                                })
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
                    data.map((val)=>{
                        return (
                            <Item
                                key={val.id}
                                id={val.id}
                            />
                        )
                    })
                }

                </tbody>
            </table>
        );
    }
}

/*
* 根据pathName 判断当前应该显示什么列表
* isCheckAll 判断是否是全选状态
*
 */
export default connect((state,props)=>{
    let isCheckAll = (()=> {// 判断数组中是否又被选中的对象
        for(let i = 0; i < state.data.length; i++){
            if(state.data[i].selected){
                return true;
            }
            return false;
    }

    })();
    let pathName = props.location.pathname;
    if(pathName === '/'){ // 判断当前页面是在那个路由中加载的。

        return  Object.assign({},state,{isCheckAll});
        // isCheckAll 是在处理数据中新增加的属性，页面中只需拿去使用即可无需再处理逻辑了
    }
    if (pathName === '/like'){
        console.log(isCheckAll);
        let data = {}; // 根据加载的路由，获取当前数组中，被收藏的数据对象，然后再加载当前的页面
        data.data = state.data.filter((item)=>item.like);
        return  Object.assign({},data,{isCheckAll});
    }
})(Mian);


























