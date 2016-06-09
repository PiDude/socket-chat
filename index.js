
//these are for the chat example

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


//this is for getting the IP address

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
//  response.send('<h1>HELLO Dr. JONES !!<h1>');

});


var user = 1 ;
io.on('connection', function(socket)  { console.log(' %d users connected.', user++); });


http.listen(8080, function(){
  console.log('listening on %s:8080', ip_address);
});

