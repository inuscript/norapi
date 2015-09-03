import { combineReducers } from 'redux'
import Immutable from 'immutable'
import * as types from "../constants/ActionTypes"
import tokenGenerator from "../lib/token"

const defaultValue = {
  memberId : 1,
  authToken: undefined
}

const token = function(state = defaultValue, action){
  switch(action.type){
  case types.SET_MEMBER:
    return {
      memberId : action.id,
      authToken : tokenGenerator(action.id)
    }
  }
  return state
}

const reducer = combineReducers({
  token
})

export default reducer