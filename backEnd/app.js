const app = require('./src/server')

app.get('/', (res) => {
  res.send('Hello World!')
})

module.exports = app
