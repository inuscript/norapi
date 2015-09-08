import React,{ Component } from 'react'

export default class Fetcher extends Component{
  render(){
    const { api, actions } = this.props

    return <form>
      <div>
        <input type="url" value={api.baseUrl} />
        <input value={api.path} onChange={ (e) => {
          actions.apiUrlPath(e.target.value) 
        } } />
      </div>
      <div>
        <textarea value={api.body} onChange={(e) => {actions.apiBody(e.target.value)}} />
      </div>
      <button onClick={() => { actions.fetcBody() } }>Fetch API</button>
    </form>
  }
}
