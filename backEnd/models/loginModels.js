const pool = require('./../helpers/dbConnect').getInstance()

// show client information whit courses with inner join

const showInformation = async (id) => {
  const SQLquery = {
    text: `
SELECT
  client.id,
  client.firstname,
  client.lastname,
  client.email,
  client.image_url,
  client.createdate,
  client.updatedate,
  course.id,
  course.title,
  course.description,
  course.duration,
  course.level,
  course.image_url,
  course.createdate,
  course.updatedate
FROM
  client_course AS cc
  INNER JOIN  client ON cc.client_id = client.id
  INNER JOIN course ON cc.course_id = course.id
  WHERE client.id = $1`,
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

module.exports = { showInformation }
