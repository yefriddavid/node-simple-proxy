require('dotenv').config()
const fs = require('fs')
// const https = require('https')
const http = require('http')
const app = require("express")()
const httpProxy = require('http-proxy')
const SOURCE_PORT = "80" //process.env.SOURCE_PORT;
const SOURCE_HOST = process.env.SOURCE_HOST;
const PROXY_PORT = process.env.PROXY_PORT;
const LOCAL_PORT = process.env.LOCAL_PORT;

const proxy = httpProxy.createProxyServer();

console.log("Started");
console.log("Source Host: ", SOURCE_HOST);
console.log("Source port: ", SOURCE_PORT);
console.log("Local port:", LOCAL_PORT);

http.createServer(function (req, res) {

  console.log("Crossing...");
    
    proxy.web(req, res, {      
      target: {
        host: SOURCE_HOST,
        port: SOURCE_PORT
      }
    });

}).listen(LOCAL_PORT);




