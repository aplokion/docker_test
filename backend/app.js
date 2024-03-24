var express = require('express')

var app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

app.listen(process.env.NODE_LOCAL_PORT)

