const { newUser, allUsers } = require('../models/userModel')
const { showError } = require('../helpers')

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const payload = {
    firstName,
    lastName,
    email,
    password,
    createDate: new Date(),
    updateDate: new Date(),
  }
  try {
    await newUser(payload)
    res
      .status(200)
      .json({ message: 'Usuario creado con exito', code: 201, payload })
  } catch (e) {
    showError(res, e)
  }
}
exports.getAllUsers = async (req, res) => {
  try {
    await allUsers()
    res.status(200).json({
      status: 'success',
      allUsers,
    })
  } catch (e) {
    showError(res, e)
  }
}
