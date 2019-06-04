import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import {store }from './store'
import Posts from './component/post'
import FormPost from './component/formpost'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Welcome React </h1>
        </header>
        <FormPost />
        <Posts />

      </div>
    </Provider>

  );
}

export default App;
