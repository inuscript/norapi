import React, { Component, PropTypes} from "react"
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/';

export default class App extends Component{
  render(){
    const { dispatch, token } = this.props
    const actions = bindActionCreators(Actions, dispatch)
    return (
      <form className="api-application">
        <h1>API check tool</h1>
        <div>
          <Token token={token} actions={actions} />
        </div>
      </form>
    )
  }
}

class Token extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { token, actions } = this.props
    return <div className="token"> 
      <MemberInput
        onChange={(e) => actions.setMember(e.currentTarget.value)}
        memberId={token.memberId}
      />
      <div>
        Authenticate: {token.authToken}
      </div>
    </div>
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

