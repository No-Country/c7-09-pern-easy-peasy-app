const pool = require('./../helpers/dbConnect').getInstance()

const newUser = async (payload) => {
  const SQLquery = {
    text: `INSERT INTO client (firstname, lastname, email, password, createdate, updatedate) VALUES ($1, $2, $3, $4, $5, $6)`,
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
    console.log('error al insertar datos en tabla client: ', e.code, e.message)
    throw new Error(e)
  }
}

const allUsers = async () => {
  const SQLquery = {
    text: `SELECT id, firstname, lastname, email, password, createdate, updatedate FROM client ORDER BY id ASC `,
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al consultar datos en tabla client: ', e.code, e.message)
    throw new Error(e)
  }
}

const updateUser = async (id, payload) => {
  const SQLquery = {
    text: `UPDATE client SET firstname = $1, lastname = $2, email = $3, password = $4, updatedate = $5 WHERE id = $6 RETURNING *`,
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
    console.log(
      'error al actualizar datos en tabla client: ',
      e.code,
      e.message
    )
    throw new Error(e)
  }
}

const showUserById = async (id) => {
  const SQLquery = {
    text: `SELECT id, firstname, lastname, email, password, createdate, updatedate FROM client WHERE id = $1`,
    values: [id],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al consultar datos en tabla client: ', e.code, e.message)
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
    console.log('error al eliminar datos en tabla client: ', e.code, e.message)
    throw new Error(e)
  }
}

const getUserByEmail = async (email) => {
  const SQLquery = {
    text: `SELECT id, firstname, lastname, email, password, image_url, createdate, updatedate FROM client WHERE email = $1`,
    values: [email],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al consultar datos en tabla client: ', e.code, e.message)
    throw new Error(e)
  }
}

module.exports = {
  allUsers,
  newUser,
  updateUser,
  showUserById,
  deleteUser,
  getUserByEmail,
}
