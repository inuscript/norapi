import * as types from "../constants/ActionTypes"
import {createAction} from "redux-actions"

export let setMember = createAction(types.SET_MEMBER, id => id)

export let apiUrlPath = createAction(types.API, (path) => {
  return { path }
})

export let apiBody = createAction(types.API, (body) => { 
  return { body } 
})

export function fetchApi(){
  return { type: types.API }
}