import React, { Component } from 'react'
import axios from 'axios'

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
