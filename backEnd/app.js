const cors = require('cors')
const app = require('./src/server')

app.use(cors())
app.use('/', require('./routes/usersRoutes'))
app.use('/', require('./routes/coursesRoutes'))
app.use('/', require('./routes/loginRoutes'))

module.exports = app
