import React from 'react';
import {connect} from "react-redux"
import {BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import  Home from './home'
import  Main from './main'
import  Add  from './add'
import Footer from "./foot";
class App extends  React.Component {
    // constructor(props){
    //     super(props);
    //     this.now = 0;
    //     this.state = {
    //         data:[
    //             {
    //                 id       : 0,
    //                 title    : "空白格11",
    //                 singer   : "蔡健雅11",
    //                 selected : true,
    //                 like     : false
    //             },{
    //                 id       : 1,
    //                 title    : "空白格22",
    //                 singer   : "蔡健雅2222",
    //                 selected : true,
    //                 like     : false
    //             },{
    //                 id       : 2,
    //                 title    : "空白格33",
    //                 singer   : "蔡健雅33333",
    //                 selected : true,
    //                 like     : false
    //             },{
    //                 id       : 3,
    //                 title    : "空白格33",
    //                 singer   : "蔡健雅33333",
    //                 selected : true,
    //                 like     : false
    //             }
    //         ]
    //     }
    //     this.add = this.add.bind(this);
    //     this.checkAll = this.checkAll.bind(this);
    //     this.setCheck = this.setCheck.bind(this);
    //     this.setLike = this.setLike.bind(this);
    //     this.remove = this.remove.bind(this);
    //     this.removeSelect = this.removeSelect.bind(this);
    //     this.likeSelect = this.likeSelect.bind(this);
    //     this.cancelLikeSelect = this.cancelLikeSelect.bind(this);
    // }
    //
    // add(title,singer){
    //     let data = this.state.data;
    //     if (!title && !singer) return;
    //     data.push({
    //         id:this.now,
    //         title:title,
    //         singer:singer,
    //         selected :false,
    //         like:false
    //     });
    //     this.now++;
    //     this.setState({
    //         data
    //     })
    // }
    // isCheckAll(){
    //
    //     let data = this.state.data;
    //     for(let i = 0; i < data.length; i++){
    //         if(!data[i].selected){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    //
    // checkAll(checked){
    //     let data = this.state.data.map((value)=>{
    //         value.selected = checked;
    //         return value;
    //     });
    //     this.setState({
    //         data
    //     })
    // }
    //
    // setCheck(index,checked){
    //     let data = this.state.data;
    //     data.forEach((val)=>{
    //         if (val.id === index){
    //             val.selected = checked;
    //         }
    //     });
    //     this.setState({
    //         data
    //     })
    //     // data[index].selected  = checked;
    //     // this.setState({
    //     //     data
    //     // })
    // }
    //
    // setLike(index,checked){
    //     let data = this.state.data;
    //     // data[index].like = checked;
    //     data.forEach((val)=>{
    //         if (val.id === index){
    //             val.like = checked;
    //         }
    //     });
    //     this.setState({
    //         data
    //     })
    // }
    //
    // remove(index){
    //     let data = this.state.data.filter((val)=> val.id!== index);
    //     this.setState({
    //         data
    //     })
    // }
    //
    // removeSelect(){
    //     let data = this.state.data.filter((val)=> !val.selected);
    //     this.setState({
    //         data
    //     })
    // }
    //
    // likeSelect(){
    //     let data = this.state.data.map((val)=>{
    //         if (val.selected){
    //             val.like = true;
    //         }
    //         return val;
    //     })
    //     this.setState({
    //         data
    //     })
    // }
    //
    // cancelLikeSelect(){
    //     let data = this.state.data.map((val)=>{
    //         if (val.selected){
    //             val.like = false;
    //         }
    //         return val;
    //     })
    //     this.setState({
    //         data
    //     })
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(!nextState.listState){
    //         let likeData = nextState.data.filter((val)=>val.like);
    //         if (!likeData.length){
    //             this.setState({
    //                 listState:true
    //             });
    //             return false
    //         }
    //     }
    //     return true;
    // }

    judgeIsPalindrome (str){
        if (null == str || str.length < 2) {
            return 'false';
        } else {
            if (str.split("").reverse().join("") === str)
            {

                alert('true');
                return 'true';
            } else {
                alert('false');
                return 'false';
            }
        }
    }

    render(){

        this.judgeIsPalindrome('黄山落叶松叶落山黄');
        console.log(this.props);
        return(
            <BrowserRouter>  {/*<!--包裹导航的 !-->*/}
                <div id="musicApp">
                    <Switch>
                        <Route  path="/add" component={Add}/> {/*<!--路由注册 !-->*/}
                        <Route  path="/" render={(e)=>{
                            if(this.props.data.length < 1){
                                return  <Redirect to="/add"/> /*<!--路由重定向 !-->*/
                            }
                            return <Home router={e}/>
                        }}/>
                    </Switch>

                </div>
            </BrowserRouter>

        );
    }
}
export default  connect((state)=>state)(App);
{/*<!-- redux包裹关联当前模块的属性及状态返回一个新的组件 !-->*/}


// export default  connect((state,props)=>{
//     console.log(state,props);
//     return state;
// })(App);