const request = require('supertest')
const app = require('../app')

app.get('/users', async (req, res) => {
  res.status(200).json({ name: 'john' })
})

describe('test on app', () => {
  test('should return user', async () => {
    try {
      const result = await request(app).get('/users').expect(200)
      expect(result.text).toEqual(JSON.stringify({ name: 'john' }))
    } catch (error) {
      console.log(error)
    }
  })
})
