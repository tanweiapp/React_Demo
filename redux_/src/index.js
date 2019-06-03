import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"
import  { Provider  } from "react-redux";
import  reducer from './reducer'
import  App from './app'

let store = createStore(reducer); {/*<!-- radux store 注册 -->*/}
// console.log(store.getState());
// store.dispatch({ // 执行添加数据的事件
//     type:"ADD",
//     title:"天哭",
//     singer:"刘伟"
// });
// console.log(store.getState());
// let id = store.getState().data[0].id;
// store.dispatch({ // 执行添加数据的事件
//     type:"REMOVE",
//     id:id
// });{/*<!-- radux 外层包裹组件 -->*/}  {/*<!--此处可以传递属性 property="我是传过来的属性撒！" -->*/}
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>,

    document.getElementById('root')
);