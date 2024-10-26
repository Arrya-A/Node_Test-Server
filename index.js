const express = require('express')
const cors = require('cors')
require('dotenv').config()

const router = require('./routes/router')
require('./dbConnections/connection')

const testServer = express()

testServer.use(cors())
testServer.use(express.json())
testServer.use(router)

const PORT = 3000 || process.env.PORT
testServer.listen(PORT, () => {
    console.log('Server running');
})
testServer.get('/', (req, res) => {
    res.status(200).send("success")
})