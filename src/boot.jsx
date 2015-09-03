import React from "react"
import App from "./component/App.jsx"
import { Provider }  from 'react-redux'
export default function(container){
  React.render(
    <Provider>
      <App/>
    </Provider>,
  container)
}