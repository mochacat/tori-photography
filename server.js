var express = require('express')
  path = require('path'),
  httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer()
var app = express()
var port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'public')))

if (process.env.NODE_ENV !== 'production'){
  
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

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
