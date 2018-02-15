const express = require('express')
const server = express()
const port = 8080

server.get('/', function(req,res,next){
    res.send('<h1>Index!</h1>')
})

server.listen(port, function(){
    console.log(`Executando na porta ${port}...`)
})