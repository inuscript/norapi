import * as types from "../constants/ActionTypes"
import path from "path"
import tokenGenerator from "../services/token"
import { Map } from 'immutable'
import { handleAction, handleActions } from 'redux-actions'

const generateState = function(state = {}, updateState = {}){
  let map = Map(state).merge(updateState)
  let url = path.join(map.get("baseUrl"), map.get("path"))
  return map.set("url", url).toObject()
}

export default handleActions({
  API: (state, action) => {
    return generateState(state, action.payload)
  }
}, generateState({
  baseUrl : "http://localhost:3000/api/v1",
  path : ""
  })
)
