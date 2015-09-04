import React,{ Component } from 'react'

export default class Fetcher extends Component{
  render(){
    const { api, actions } = this.props

    return <form>
      <div>
        <input type="url" value={api.baseUrl} />
        <input value={api.path} onChange={(e) => { 
          actions.apiUrlPath(e.value) 
        }} />
      </div>
      <div>
        <textarea onChange={(e) => {actions.apiBody(e.value)}} />
      </div>
    </form>
  }
}
