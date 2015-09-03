import React, { Component } from "react"

export default class Token extends Component{
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

