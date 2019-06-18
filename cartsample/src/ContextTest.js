import React, { Component } from 'react'

const Context = React.createContext()
const store = {
  token:'jdadsacsafaa'
}

export default class ContextTest extends Component {
  render() {
    return (
      <div>
        <Context.Provider value={store}>
          <div>
            <Context.Consumer>
              {store => <p>{store.token}</p>}
            </Context.Consumer>
          </div>
        </Context.Provider>
      </div>
    )
  }
}
