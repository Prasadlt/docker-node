const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hi, this is a sample page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
