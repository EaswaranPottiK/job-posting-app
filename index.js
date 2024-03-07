const mongoose = require('mongoose')
const jobRoutes = require('./routes/jobRoutes')
const Job  = require('./models/Job')
const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser')

// app.use(express.json())
app.use(bodyParser.json())
app.use('/api',jobRoutes)

app.listen(port,()=>{
    console.log(`API is now active and listening at port- ${3000}`)
})
