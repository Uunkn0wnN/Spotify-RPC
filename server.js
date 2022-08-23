const express = require('express')
const server = express();

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://shiroweb-dashboard.221447.repl.co/"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("by Uunkn0wnN")
  })
}
module.exports = keepAlive

