import * as types from "../constants/ActionTypes"

import tokenGenerator from "../services/token"
import { Map } from 'immutable'
import { handleAction, handleActions } from 'redux-actions'

const generateState = function(memberId){
  return Map({
    memberId: memberId,
    authToken: tokenGenerator(memberId)
  }).toObject()
}

const initialState = generateState(0)

const reducer = handleActions({
  SET_MEMBER : (state, action) => {
    return generateState(action.payload)
  }
}, initialState)

export default reducer