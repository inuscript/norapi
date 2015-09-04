import * as types from "../constants/ActionTypes"

export function setMember(id){
  return { type : types.SET_MEMBER, id }
}

export function apiUrlPath(path){
  return {
    type: types.API_URL,
    path
  }
}