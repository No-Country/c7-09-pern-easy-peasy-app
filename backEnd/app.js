const app = require('./src/server')

app.use('/', require('./routes/usersRoutes'))
app.use('/', require('./routes/coursesRoutes'))
app.use('/', require('./routes/loginRoutes'))

module.exports = app
