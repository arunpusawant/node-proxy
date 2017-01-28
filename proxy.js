/* proxy.js
   Author: Caleb Thorsteinson
   Date: May 11, 2014
   Description: An intermediate proxy that runs on port 8080.  This
   resolves all incoming requests so that they only use the select
   resource.  This prevents people from maliciously tampering with the
   index through the update resource, and let's Nutch still access it
   locally 
*/

var http = require('http');
var httpProxy = require('http-proxy');
var url = require('url');

var proxy = httpProxy.createProxyServer({});

var server = require('http').createServer(function(req, res) {
    var reqUrl = url.parse(req.url);
    // No matter what path you put in, this is the path that will be requested
    reqUrl.pathname = url.resolve(reqUrl.pathname, 'hotstar.com');
    req.url = url.format(reqUrl);
    proxy.web(req, res, { target: 'http://hotstar.com' });
});

console.log("listening on port 8080");
server.listen(8080);
