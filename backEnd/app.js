const app = require('./src/server')

app.use('/', require('./routes/usersRoutes'))

module.exports = app
