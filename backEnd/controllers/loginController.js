const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { showError } = require('../helpers')
const { getUserByEmail } = require('../models/userModel')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

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
      const isPasswordValid = await bcrypt.compare(password, user[0].password)

      if (!isPasswordValid) {
        res.status(401).json({
          message: 'Contraseña incorrecta',
          code: 401,
        })
      } else {
        // generate JWT
        const token = await jwt.sign(
          { id: user.id, name: user.name },
          process.env.JWT_SIGN,
          {
            expiresIn: '30d',
          }
        )

        return res.status(200).json({
          message: 'Usuario autenticado con exito',
          token,
          code: 200,
        })
      }
    }
  } catch (e) {
    showError(res, e)
  }
}
