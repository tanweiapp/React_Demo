
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM} from './actionTypes'

const defaultState = {
    inputValue:'',
    list:[]
}

export default (state = defaultState,action) => { // state 整个store 中的数据
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
  }

  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
                newState.list.push(newState.inputValue)
                newState.inputValue = '';
                console.log(newState);
                return newState;
  }
  
  if(action.type === DELETE_TODO_ITEM ){
    const newState = JSON.parse(JSON.stringify(state));
                console.log(newState.list)
                newState.list.splice(action.index,1)
                console.log(newState.list)
                return newState;
  }
    return state;
}