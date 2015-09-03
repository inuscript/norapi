import jwt from "jsonwebtoken"
import { Map } from "Immutable"
import { cert , payload } from "./secrets"

const generatePayload = function(sub){
  return Map(payload).set("sub", sub).toObject()
}

export default function(sub){
  const payload = generatePayload(sub)
  return jwt.sign(payload, cert, { 
    expireInSeconds: 60
  })
}