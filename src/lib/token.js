import jwt from "jsonwebtoken"
var fs = require("fs") // https://github.com/substack/brfs/issues/39

export default function(sub){
  var cert = fs.readFileSync(__dirname + "/sample.pub", "utf8")
  return jwt.sign({
    iss: "XXXX",
    sub: sub,
    aud: "xxx.yyyy.jp",
    level: "session"
  }, cert, { 
    expireInSeconds: 60
  })
}