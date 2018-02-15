const express = require('express')
const server = express()
const port = 8080

server.get('/', function(req,res,next){
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

server.get('/', function(req,res){
    console.log('Resposta...')
    res.send(`<h1>Olá Express!</h1>`)    
})

server.listen(port, function(){
    console.log(`Executando na porta ${port}...`)
})