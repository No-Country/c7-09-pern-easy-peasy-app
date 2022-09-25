const pool = require('./../helpers/dbConnect').getInstance()

const newUser = async (payload) => {
  const SQLquery = {
    text: `INSERT INTO user (firstName, lastName, email, password, updatedate) VALUES ($1, $2, $3, $4, $5)`,
    values: [
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.password,
      payload.updateDate,
    ],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al insertar datos en tabla user: ', e.code, e.message)
  }
}

module.exports = { newUser }
