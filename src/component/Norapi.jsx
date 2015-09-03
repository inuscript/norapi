import React, { Component, PropTypes} from "react"
import { createStore } from 'redux';
import tokenGenerator from "../lib/token"

function api(state, action){
  state.memberId = action.memberId
  return state
}
let store = createStore(api)

export default class Norapi extends Component{
  constructor(){
    super()
    this.state = {
      memberId: 1
    }
  }
  onChangeMember(e){
    this.setState({
      memberId : e.value
    })
  }
  render(){
    return (
      <form className="api-application">
        <h1>API check tool</h1>
        <div>
          <MemberInput
            onChange={this.onChangeMember.bind(this)}
            memberId={this.state.memberId}
          />
          <Token memberId={this.state.memberId} />
        </div>
      </form>
    )
  }
}

class Token extends Component{
  generateToken(memberId){
    return tokenGenerator(memberId)
  }
  render(){
    return <div className="token"> Authenticate: {this.generateToken(this.props.memberId)}</div>
  }
}

class MemberInput extends Component{
  render(){
    return <div>
      <label>Member ID</label>
      <input 
        onChange={this.props.onChange} 
        value={this.props.memberId}
      />
    </div>
  }
}