 const express = require('express')
 const dotenv = require('dotenv')

 dotenv.config()

 const app = express()

 //Creating express api
 app.get('/', (req, res) => {
    res.send('Hello From Express')
 })

 const PORT = process.env.PORT || 5003

 app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
 })
  