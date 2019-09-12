import React, { Component } from '../node_modules/@types/react'
import axios from '../node_modules/axios'

export default class TestComponent extends Component {

    componentDidMount(){
        axios.get('/api/todolist')
        .then((res)=>{alert(res)})
        .catch((e)=>{alert(e)});
    }
  render() {
    return (
      <div>
        Text
      </div>
    )
  }
}
