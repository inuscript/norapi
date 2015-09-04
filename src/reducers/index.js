import { combineReducers } from 'redux'
import token from "./token"
import api from "./api"

const reducer = combineReducers({
  token,
  api
})

export default reducer