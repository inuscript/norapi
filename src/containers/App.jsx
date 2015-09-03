import { Component, PropTypes} from "react"
import { connect } from 'react-redux';
import Norapi from '../component/Norapi.jsx'
let select = function(state){
  return {
    token : state.token
  }
}

export default connect(select)(Norapi)
