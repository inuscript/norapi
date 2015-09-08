import { connect } from 'react-redux';
import App from '../component/App.jsx'

let mapStateToProps = function(state){
  return {
    token : state.token,
    api : state.api
  }
}

export default connect(mapStateToProps)(App)
