const pool = require('./../helpers/dbConnect').getInstance()

const newUser = async (payload) => {
  const SQLquery = {
    text: `INSERT INTO client (firstName, lastName, email, password, createDate, updatedate) VALUES ($1, $2, $3, $4, $5, $6)`,
    values: [
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.password,
      payload.createDate,
      payload.updateDate,
    ],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al insertar datos en tabla user: ', e.code, e.message)
    throw new Error(e)
  }
}

const allUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM client')
    return result.row
  } catch (e) {
    console.log('error al consultar datos en tabla user: ', e.code, e.message)
    throw new Error(e)
  }
}
const updateUser = async (id, payload) => {
  const SQLquery = {
    text: `UPDATE client SET firstName = $1, lastName = $2, email = $3, password = $4, updatedate = $5 WHERE id = $6`,
    values: [
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.password,
      payload.updateDate,
      id,
    ],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al actualizar datos en tabla user: ', e.code, e.message)
    throw new Error(e)
  }
}

const showUser = async (id) => {
  const SQLquery = {
    text: `SELECT * FROM client WHERE id = $1`,
    values: [id],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al consultar datos en tabla user: ', e.code, e.message)
    throw new Error(e)
  }
}

const deleteUser = async (id) => {
  const SQLquery = {
    text: `DELETE FROM client WHERE id = $1`,
    values: [id],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al eliminar datos en tabla user: ', e.code, e.message)
    throw new Error(e)
  }
}

module.exports = { allUsers, newUser, updateUser, showUser, deleteUser }
