import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {};

const middleWare = [thunk];
/*compose
*  store 初始化的参数
*  createStore:
*  initialState:
*  applyMiddleware
*/
// 


export  const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

// const store = createStore(()=>[],{},applyMiddleware()) 