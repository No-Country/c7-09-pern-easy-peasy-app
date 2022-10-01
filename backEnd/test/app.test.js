// const request = require('supertest')
// const app = require('../app')

// app.get('/users', async (req, res) => {
//   res.status(200).json({ name: 'john' })
// })

// describe('GET /users', () => {
//   it('respond with json', (done) => {
//     request(app)
//       .get('/users')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, { name: 'john' }, done)
//   })
// })

// describe('test on app', () => {
//   test('should return user', async () => {
//     try {
//       const result = await request(app).get('/users').expect(200)
//       expect(result.text).toEqual(JSON.stringify({ name: 'john' }))
//     } catch (error) {
//       console.log(error)
//     }
//   })
// })
