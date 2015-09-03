var fs = require("fs") // https://github.com/substack/brfs/issues/39
import basePayload from "./payload.json"

export const cert = fs.readFileSync(__dirname + "/sample.pub", "utf8")
export const payload = basePayload