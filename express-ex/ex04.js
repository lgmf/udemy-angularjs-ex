const express = require('express')
const server = express()
const port = 8080

server.route('/users')
    .get((req, res) => {
        res.json([
            { id: 1, name: 'Luiz' },
            { id: 2, name: 'CH' },
            { id: 3, name: 'Marcos' },
        ])
    })
    .post((req, res) => res.send('Novo usuário'))
    .put((req, res) => res.send('Altera usuário'))

server.listen(port, function () {
    console.log(`Executando na porta ${port}...`)
}) 