import React, { Component } from "react"

export default class Token extends Component{
  render(){
    const { token, actions } = this.props
    return <form className="token"> 
      <MemberInput
        onChange={(e) => actions.setMember(e.target.value)}
        memberId={token.memberId}
      />
      <div>
        Authenticate: {token.authToken}
      </div>
    </form>
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

