const pool = require('./../helpers/dbConnect').getInstance()

const newCourse = async (payload) => {
  const SQLquery = {
    text: `INSERT INTO course (title, description, price, image_url, resurce_url, createdate, updatedate) VALUES ($1, $2, $3, $4, $5, $6,$7)`,
    values: [
      payload.title,
      payload.description,
      payload.price,
      payload.imageUrl,
      payload.resurceUrl,
      payload.createDate,
      payload.updateDate,
    ],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al insertar datos en tabla course: ', e.code, e.message)
    throw new Error(e)
  }
}

const allCourses = async () => {
  const SQLquery = {
    text: `SELECT id, title, description, price, image_url, resurce_url, createdate, updatedate FROM course`,
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al consultar datos en tabla course: ', e.code, e.message)
    throw new Error(e)
  }
}

const updateCourse = async (id, payload) => {
  const SQLquery = {
    text: `UPDATE course SET title = $1, description = $2, price = $3, image_url = $4, resurce_url = $5, updatedate = $6 WHERE id = $7 RETURNING *`,
    values: [
      payload.title,
      payload.description,
      payload.price,
      payload.imageUrl,
      payload.resurceUrl,
      payload.updateDate,
      id,
    ],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log(
      'error al actualizar datos en tabla course: ',
      e.code,
      e.message
    )
    throw new Error(e)
  }
}

const showCourse = async (id) => {
  const SQLquery = {
    text: `SELECT id, title, description, price, image_url, resurce_url, createdate, updatedate FROM course WHERE id = $1`,
    values: [id],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al consultar datos en tabla course: ', e.code, e.message)
    throw new Error(e)
  }
}

const deletecourse = async (id) => {
  const SQLquery = {
    text: `DELETE FROM course WHERE id = $1`,
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

const showCourseById = async (id) => {
  const SQLquery = {
    text: `SELECT id, title, description, price, image_url, resurce_url, createdate, updatedate FROM course WHERE id = $1`,
    values: [id],
  }
  try {
    const result = await pool.query(SQLquery)
    return result.rows
  } catch (e) {
    console.log('error al consultar datos en tabla course: ', e.code, e.message)
    throw new Error(e)
  }
}

module.exports = {
  allCourses,
  newCourse,
  updateCourse,
  showCourse,
  deletecourse,
  showCourseById,
}
