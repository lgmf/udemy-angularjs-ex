const express = require('express')
const server = express()
const port = 8080

//USE -> Any http verbs
server.use('/api', function(req,res,next){
    console.log('Inicio...')
    res.send(`<h1>Minha primeira API</h1>`)
    next()
    console.log('Fim...')
})

server.listen(port, function(){
    console.log(`Executando na porta ${port}...`)
})