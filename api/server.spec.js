const request = require('supertest')
const server = require('./server')

describe('server endpoints', () => {
  describe('POST /api/sentiment-rate', () => {
    it('should return a JSON object with data', async () => {
      const response = await request(server).post('/api/sentiment-rate')
      expect(response.body).toEqual({
        sentimentRate: 5
      })
    })
  })
})