
var app = require('express')();
var http = require('http').Server(app);
var os = require('os');



// get the IP address of the machine

var interfaces = os.networkInterfaces();
var ip_address = [];  // will hold the public IPA

for (var k in interfaces)  {
  for (var k2 in interfaces[k])  {

    var address = interfaces[k][k2];

    if(address.family ==='IPv4' && !address.internal)  {
      ip_address.push(address.address);
    }
  }
}






app.get('/', function(request, response)  {
  response.sendFile(__dirname + '/index.html');
});


http.listen(8080, function(){
  console.log('listeining on %s:8080', ip_address);
});

