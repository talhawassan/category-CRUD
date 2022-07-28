const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const catgRouter = require('./routers/category')

const app = express()

app.use(express.json())
app.use(catgRouter)


app.listen(process.env.PORT, () => {
    console.log(`server is up on port`)
})

