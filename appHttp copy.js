require('dotenv').config()
const fs = require('fs')
const https = require('https')
const app = require("express")()
const httpProxy = require('http-proxy')

const TARGET_PORT = process.env.TARGET_PORT
const TARGET_HOST = process.env.TARGET_HOST
const PROXY_PORT = process.env.PROXY_PORT


var proxy = httpProxy.createProxyServer();

https.createServer(function (req, res) {
  
    proxy.web(req, res, {      
      target: {
        host: TARGET_HOST,
        port: TARGET_PORT
      }
    });
  

}).listen(8081);


