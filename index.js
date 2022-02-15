const express = require('express')
const app = express()
const port = process.env.prt || 1337

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Over ons')
})

app.get('/info', (req, res) => {
  res.send('Meer info')
})

app.get('*', (req, res) => {
  res.send('Not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})