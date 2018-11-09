const express = require('express') // grabs the express module
// server is a variable that we create by running the express module
const server = express() 

function fib(n){
    let a = 0
    let b = 1
    let seq = []
    for (let i = 0; i <n; i++){
        const temp = b
        b = a + b
        a = temp
        seq.push(a)
    }

    return seq

}
//s/server.get('/')// to get our server to start listening
// code u put inside with execute when server is ready

server.get('/', function (req, res){
    res.send('hello world') // us sending to server
    console.log('Request to route /') // shows up on inspect element
})

// pass things in the url by doing /fib?n=_
server.get('/fib', function(req, res){
    const n = parseInt(req.query.n)
    console.log(req.query.n);
    if (isNaN(n)){
        res.sendStatus(404)
    }
    else{
        res.send(fib(n))
    }
})
server.listen(8080, function() {
    console.log('Server is listening on port 8080')
})
// if this is it, will return a 404 code b'c it dosent do anytging with the server

//domain: localhost 8080


