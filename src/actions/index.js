import * as types from "../constants/ActionTypes"

export function setMember(id){
  return { type : types.SET_MEMBER, id }
}