const request = require('supertest');
const server = require('./server');

describe('server endpoints', () => {
  describe('POST /api/sentiment-rate', () => {
    it('should return a JSON object with data', async () => {
      const requestBody = {
        text: 'This is a sample tweet with good/bad sentiment'
      };
      
      const response = await request(server)
        .post('/api/sentiment-rate')
        .send(requestBody);

      expect(response.body).toEqual({
        sentimentRate: 5
      });
    });
  });
});
