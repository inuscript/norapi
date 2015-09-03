import { connect } from 'react-redux';
import Norapi from '../component/Norapi.jsx'

let mapStateToProps = function(state){
  return {
    token : state.token
  }
}

export default connect(mapStateToProps)(Norapi)
