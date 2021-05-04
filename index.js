var express = require('express');
var bodyParser = require('body-parser')
var server = express();
server.use(express.static(__dirname + '/'))

// app.use(cors());

// //Json Reader
// app.use(bodyParser.json());
var jsonParser = bodyParser.json()

var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});

var bacon = require('bacon-cipher');

server.get('/bacon-cip',function(req,res){
    console.log("Incoming Req")
res.send("Hi there");
})

server.post('/bacon-encode',jsonParser,function(req,res){
    console.log("Incoming Req");
    console.log(req.body);
    var dat=req.body.text;
    res.send(bacon.encode(dat));
    console.log(req.body);
})

server.post('/bacon-decode',jsonParser,function(req,res){
    console.log("Incoming Req");
    console.log(req.body);
    var dat=req.body.text;
    console.log(bacon.decode(dat));
    res.send(bacon.decode(dat));
    console.log("Decoded data"+bacon.decode(dat));
})


console.log(bacon.encode('steganography'));