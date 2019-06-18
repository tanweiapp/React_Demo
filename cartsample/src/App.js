import React from 'react';
import logo from './logo.svg';
import './App.css';
import CartSample from './cartSample'
import CommentList from './CommentList'
import { Button } from 'antd'
import Hoc from "./Hoc";
import Composition from './Composition'
import ContextTest from './ContextTest';
import HookTest from './HookTest'
import TestComponent from './testComponent';


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
      <TestComponent />
    </div>
  );
}

export default App;
