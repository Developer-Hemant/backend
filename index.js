require('dotenv').config()

const express = require('express') // 1 and 2 are same 
//import express from "express" //use whatever you like either 1 of 2

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hi World!')
})

app.get('/twitter', (req,res)=>{
    res.send('hemantdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/office',(req,res)=>{
    res.send("<h1>meet me in the office between 9 to 12</h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })