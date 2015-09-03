import jwt from "jsonwebtoken"

export default function(sub){
  var cert = "certcert"
  return jwt.sign({
    "sub": sub,
  }, cert, { 
    expireInSeconds: 60
  })
}