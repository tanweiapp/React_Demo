import React, { useState, useEffect, useReducer, useContext} from 'react'


function FruitList({fruits,setFruit}) {
  return (
        fruits.map(f=> (
            <li key={f}
                onClick ={() => setFruit(f)}
            >
            {f}
            </li>
        ))
  )
}

function FruitAdd (props){
    const [pname, setPname] = useState('')
    const {dispatch} = useContext(Context)
    const onAddFruit = (e)=>{
        if(e.key === 'Enter'){
            // 调用父组件的回调函数
            // props.onAddFruit(pname);
            dispatch({type:'add',payload:pname});
            setPname('')
        }
    }
  return (
    <div>
    <input type="text"
           value={pname}
           onChange={e=>setPname(e.target.value)}// 保存输入的最新值状态
           onKeyDown={onAddFruit}
    />
      
    </div>
  )
}

function fruitReducer(state,action){
  switch (action.type) {
    case 'init':
      return action.payload;
      case 'add':
        return [...state, action.payload]
    default:
      return state;
  }
}

const Context = React.createContext();

export default function HookTest(){
     
    // useState 参数是状态初始值
    // 返回一个数组，第一个元素是状态变量，第二个元素是状态变更函数
    const [fruit, setFruit] = useState('草莓')
    // const [fruits, setFruits] = useState([])
    // 参数1相关的reducer ,参数2是初始值
    const [fruits, dispatch] = useReducer(fruitReducer, [])


    // 使用useEffect 使用副作用
    // 注意设置依赖选项，如果没有则设置空数组表示仅执行一次    
     useEffect(()=>{
      //模拟网络请求 
      setTimeout(()=>{
        // setFruits(['草莓','香蕉'])
        dispatch({type:'init',payload:["草莓","香蕉"]})
      },1000)
    },[])

  return (
    <Context.Provider value={{fruits,dispatch}}>
    <div>
      <p>{fruit === '' ? '请选择喜爱的水果' : `您选择的是${fruit}`}</p>
      {/* 设置回调函数，并处理好回调回来的数据处理 */}
      <FruitAdd /> 
      <FruitList fruits = {fruits} setFruit={setFruit}/>
    </div>
    </Context.Provider>
  )
}
