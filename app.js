require('dotenv').config()
const fs = require('fs')
const https = require('https')
const app = require("express")()
const httpProxy = require('http-proxy')

const TARGET_PORT = process.env.TARGET_PORT
//const TARGET_HOST = process.env.TARGET_HOST
const PROXY_PORT = process.env.PROXY_PORT

httpProxy.createServer({
  target: {
    host: TARGET_HOST, //'localhost',
    port: TARGET_PORT //8081
  },
  ssl: {
    key: fs.readFileSync('./certificates/server.key'),
    cert: fs.readFileSync('./certificates/server.cert')
  }
}).listen(PROXY_PORT)

