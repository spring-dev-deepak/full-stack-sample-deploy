const express = require('express')
require('dotenv').config()
// const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const path = require('path')

const app = express()

// app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

app.use(express.static('../front-end/build'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../front-end', 'build', 'index.html'))
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server upon running on ${port}`)
})