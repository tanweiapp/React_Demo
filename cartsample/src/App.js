import React from '../node_modules/@types/react';
import logo from './logo.svg';
import './App.css';
import CartSample from './cartSample'
import CommentList from './CommentList'
import { Button } from '../node_modules/antd/lib'
import Hoc from "./Hoc";
import Composition from './Composition'
import ContextTest from './ContextTest';
import HookTest from './HookTest'
import TestComponent from './testComponent';
import KFormTest from './KForm'


function App() {
  return (
    <div className="App">
      {/* <CartSample /> */}
     {/* < CommentList />
      <Button type="primary">Button</Button> */}
      {/* 高阶组件 */}
      {/* <Hoc name="hoc"/> */}
      {/* <Composition />
      <ContextTest /> */}
     <HookTest />
      {/* <TestComponent />  */}
      {/* <KFormTest/> */}
    </div>
  );
}

export default App;
