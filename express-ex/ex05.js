const express = require('express')
const server = express();
const routes = require('./ex05-routes')
const port = process.PORT || 8080

server.use('/api',routes)

server.listen(port, () => console.log(`Escutando na porta ${port}`))

