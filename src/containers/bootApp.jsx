import React from "react"
import { createStore, applyMiddleware} from "redux"
import { Provider }  from 'react-redux'

import App from "./ConnectedApp.jsx"
import reducers from '../reducers'
import thunk from 'redux-thunk';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(reducers)

export default function bootApp(container){
  React.render(
    <Provider store={store}>
      {() => <App/>}
    </Provider>,
  container)
}