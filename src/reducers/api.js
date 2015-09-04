import * as types from "../constants/ActionTypes"
import path from "path"
import tokenGenerator from "../services/token"
import { Map } from 'immutable'

const generateState = function(state = {}, action = {}){
  let map = Map(state)
  if(action.path){
    map = map.set("path". action.path)
  }
  let url = path.join(map.get("baseUrl"), map.get("path"))
  return map.set("url", url).toObject()
}

const initialState = generateState({
  baseUrl : "http://localhost:3000/api/v1",
  path : ""
})

export default function(state = initialState, action){
  switch(action.type){
    case types.API_URL_PATH:
      return generateState(state, action.path)
    default:
      return state
  }
}