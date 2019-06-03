import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Home from './home'
import Add from './add'

export default  class App extends React.Component{
  constructor(props){
    super(props);
    this.now = 0;
    this.state = {
      data:[
        {
          id       : 0,
          title    : "空白格11",
          singer   : "蔡健雅11",
          selected : true,
          like     : false
        },{
          id       : 1,
          title    : "空白格22",
          singer   : "蔡健雅2222",
          selected : false,
          like     : false
        },{
          id       : 2,
          title    : "空白格33",
          singer   : "蔡健雅33333",
          selected : true,
          like     : false
        },{
          id       : 3,
          title    : "空白格33",
          singer   : "蔡健雅33333",
          selected : true,
          like     : false
        }
      ]
    }
    this.add = this.add.bind(this);
    this.setCheckAll = this.setCheckAll.bind(this);
    this.setCheck = this.setCheck.bind(this);
    this.setLike = this.setLike.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(title,singer){

    let data = this.state.data;
    data.push({
      id:this.now,
      title:title,
      singer:singer,
      selected :false,
      like:false,
    });
    this.now++;
    this.setState({data});
    console.log(data);
  }

  checkAll(){
    let data = this.state.data;
    for (let i = 0; i < data.length; i++) {
      if (!data[i].selected) {
        return false;
      }
    }
    return true;
  }

  setCheckAll(checked){

    let data = this.state.data.map((value)=>{
      value.selected = checked;
      return value;
    });
    this.setState({
      data
    })
  }
  setCheck(index,checked) {
    let data = this.state.data;
    data.forEach((val) => {
      if (val.id === index) {
        val.selected = checked;
      }
    });
    this.setState({
      data
    });
  }

  setLike(index,checked){
    let data =this.state.data;
    data.map((value)=>{
      if (value.id == index){
        value.like = checked;
      }
      return value;
    })
    // data.forEach((value)=>{
    //   if (value.id == index){
    //     value.like = checked;
    //   }
    // });
    this.setState({data})
    console.log(data);
  }

  remove(index){
    let data = this.state.data.filter((value)=>value.id !== index);
    this.setState({data});
  }

  render(){
      return (
          <BrowserRouter>
            <div id="musicApp">
              <Switch>
                <Route path="/add" render={(e) => { //注册路由
                  return (<Add
                      length={this.state.data.length}
                      add={this.add}
                      router={e}
                  />);
                }}/>
                <Route path="/" render={(e) => {
                  if (this.state.data.length === 0) {
                    return <Redirect to="/add"/> // 重定向
                  }
                  return (
                      <Home
                          data={this.state.data}
                          checkAll={this.checkAll()}
                          setCheckAll={this.setCheckAll}
                          setCheck={this.setCheck}
                          setLike = {this.setLike}
                          remove = {this.remove}
                      />
                  );
                }}
                />

              </Switch>

            </div>
          </BrowserRouter>
      );
    }

}
