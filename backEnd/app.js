const app = require('./src/server')

app.use('/', require('./routes/usersRoutes'))
app.use('/', require('./routes/coursesRoutes'))

module.exports = app
