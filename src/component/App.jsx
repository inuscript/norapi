import React, { Component, PropTypes} from "react"
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/';
import Token from "./Token.jsx"
import Fetcher from "./Fetcher.jsx"

export default class App extends Component{
  render(){
    const { dispatch, token, api } = this.props
    const actions = bindActionCreators(Actions, dispatch)
    return (
      <div className="api-application">
        <h1>API check tool</h1>
        <Token token={token} actions={actions} />
        <Fetcher api={api} actions={actions}/>
      </div>
    )
  }
}
