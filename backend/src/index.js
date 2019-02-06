const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const isProduction = process.env.NODE_ENV === 'production'

// Force all responses to be in JSON format
app.use(express.json())

app.use(cors())

app.use(require('./routes'))

app.listen(process.env.PORT || port, () =>
  console.log(`Server is up and listening on port ${port}`)
)
