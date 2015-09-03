import * as types from "../constants/ActionTypes"

import tokenGenerator from "../services/token"
import { Map } from 'immutable'

const generateState = function(memberId){
  return Map({
    memberId: memberId,
    authToken: tokenGenerator(memberId)
  }).toObject()
}

const initialState = generateState(0)

export default function(state = initialState, action){
  switch(action.type){
    case types.SET_MEMBER:
      return generateState(action.id)
    default:
      return state
  }
}