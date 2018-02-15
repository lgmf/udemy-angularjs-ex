const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms`)
})

router.get('/users/:id', (req, res) => {
    res.json(
        {
            id: req.params.id,
            name: 'Luiz'
        }
    )
})

module.exports = router