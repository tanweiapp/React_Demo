import React, { Component } from 'react'
import ToDoListUI from './ToDoListUI';
import store from './store/index'
import {getInputChangeAction, getAddTodoItemAction, getItemdeleteTodoItemAction} from './store/actionCreator'
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM} from './store/actionTypes'


export default class TodoList extends Component {
    constructor(props){
      super(props);
      this.state = store.getState()
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      this.handleOnclick = this.handleOnclick.bind(this);
      this.handelItemClick = this.handelItemClick.bind(this);
      store.subscribe(this.handleStoreChange)
    }
    handleStoreChange() {
     
      this.setState(store.getState());
      console.log('store change')
      console.log(store.getState())
    }

    handleInputChange(e){
      // const action = {
      //   type:CHANGE_INPUT_VALUE,
      //   value:e.target.value
      // }
      const action = getInputChangeAction(e.target.value);
      store.dispatch(action)
    }
    handleOnclick(){
      // const action ={
      //   type:ADD_TODO_ITEM
      // }
      const action = getAddTodoItemAction()
      store.dispatch(action);
    }
    handelItemClick(index){
      // const action = {
      //   type:DELETE_TODO_ITEM,
      //   index
      // }
      const action = getItemdeleteTodoItemAction(index)
      store.dispatch(action)
    }
    
  render() {
  
    return <ToDoListUI inputValue={this.state.inputValue}
                     list = {this.state.list}
                     handleInputChange = {this.handleInputChange}
                     handleOnclick = {this.handleOnclick}
                     handelItemClick = {this.handelItemClick}
    />
  }
}
