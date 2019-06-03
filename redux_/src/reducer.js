import  { combineReducers } from "redux";

let data = (data=[{
    id:1,
    title:"天气不错",
    singer:"sdsds",
    selected:false,
    like:false
},{
    id:2,
    title:"告白地球",
    singer:'Jay',
    selected:false,
    like:false
}],action)=>{ // 处理添加数据的逻辑
    switch (action.type) {
        case "ADD":
            return [...data,{ // 参数1. ...data 展开原始数组  参数2：添加一个新对象
                id:Date.now(),
                title:action.title,
                singer:action.singer,
                selected:true,
                like:false
            }]
        case "REMOVE":
            return data.filter((item)=>item.id !== action.id);
        case "CHECK_ALL":
            return data.map((item)=>{
                item.selected = action.checked;
                return Object.assign({},item);
            })
        case "CHECK":
            return data.map((item)=>{
                if (item.id === action.id) {
                    item.selected = action.checked;
                    return Object.assign({},item);
                }
                return item;
            })
        case "CHECK_LIKE":

            return data.map((item)=>{
                if (item.id === action.id) {
                    item.like = action.checked;
                    return Object.assign({},item);
                }
                return item;
            });
        case  "REMOVE_SELECTED":
            return  data.filter((item)=>!item.selected);

        case "LIKE_SELECTED":
            return data.map((item)=>{
                if (item.selected){
                    item.like = true;
                    return Object.assign({},item);
                }
                return item;
            })
        case "CANCEL_LIKE_SELECTED":
            return data.map((item)=>{
                if (item.selected){
                    item.like = false;
                    return Object.assign({},item);
                }
                return item;
            })
    }
    console.log(action);
    return data;
}

let reducer = combineReducers({
    data
});

export  default  reducer;