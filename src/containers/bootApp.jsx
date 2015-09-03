import React from "react"
import { createStore } from "redux"
import { Provider }  from 'react-redux'

import App from "./connectApp.jsx"
import reducers from '../reducers'

let store = createStore(reducers)

export default function bootApp(container){
  React.render(
    <Provider store={store}>
      {() => <App/>}
    </Provider>,
  container)
}