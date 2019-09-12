/* eslint-disable no-unused-expressions */
import React ,{ useState, useEffect, useReducer, useContext }from 'react'

function FruitList({fruits,setFruit}){
  return (
    fruits.map(f => {
       return(<li key={f} onClick={()=>setFruit(f)}>{f}</li>) 
    })
  )
}

function FruitAdd () {
const [pname, setPname] = useState('')
const {dispatch} =  useContext(Context)
const onAddFruit = (e) => {
  if (e.key === 'Enter') {
    dispatch({type:'add', payload:pname})
    // props.onAddFruit(pname)
    setPname('')
  }
}
  return (
    <div>
      <input type="text" value={pname} 
        onChange={e => setPname(e.target.value)}
        onKeyDown={onAddFruit}
      />
    </div>
  )
}


// 状态移至全局
function fruitReducer(state, action) {
  switch (action.type) {
    case 'init':
      return action.payload;
    case 'add':
       return [...state,action.payload]
    default:
      return state;
  }
}

// 创建上下文
const Context = React.createContext()

export default function HookTest(){
// useState 参数是状态初始值
// 返回一个数组，第一元素是状态变量，第二个参数是状态变更函数
// eslint-disable-next-line no-undef

const [fruit,setFruit] = useState('草莓')
// const [fruits,setFruits] = useState([])
const [fruits, dispatch] = useReducer(fruitReducer,[])

// 使用useEffect 操作副作用
useEffect(() => {
  console.log('getFruits')
  setTimeout(() => {
    // setFruits(['草莓' , '西瓜'])
    dispatch({type:'init',payload:['草莓' , '西瓜']})
  }, 1000);
},[]) // 依赖很重要，分页数据依赖页码获取数据

useEffect(() => {
  document.title = fruit
}, [fruit])

// useEffect(() => {
//  const timer = setInterval(() => {
//     console.log('应用启动了')
//   }, 1000);
//   return function () {
//     clearInterval(timer)
//   }
// }, [])

// useReducer


  return (
    <Context.Provider value={{fruits, dispatch}}>
    <div>
      <p>{fruit === ''?'请选择喜爱的水果':`您选择的是${fruit}`}</p>
      <FruitAdd />
      <FruitList fruits={fruits} setFruit={setFruit}></FruitList>
    </div>
    </Context.Provider>
    
  )
}
