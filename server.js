var express = require('express')
  path = require('path'),
  httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

if (process.env.NODE_ENV !== 'prod'){
  
  var bundle = require('./bundle.js')
  bundle()
 
  //proxy back to webpack-dev-server 
  app.all('/static/*', function (req, res){
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    })
  })
}

proxy.on('error', function(e){
  console.log('Error on proxy', e)
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
