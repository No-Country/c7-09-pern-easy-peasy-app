const { showError } = require('../helpers')
const { getUserByEmail } = require('../models/userModel')

exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await getUserByEmail(email)
    if (user[0] === undefined) {
      res.status(404).json({
        message: 'Correo no registrado',
        code: 404,
      })
    } else {
      const isvalidPassword = () => {
        return password === user[0].password
      }
      if (!isvalidPassword()) {
        res.status(401).json({
          message: 'Contraseña incorrecta',
          code: 401,
        })
      } else {
        res.status(200).json({
          message: 'Usuario autenticado con exito',
          code: 200,
        })
      }
    }
  } catch (e) {
    showError(res, e)
  }
}
