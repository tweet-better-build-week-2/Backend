const request = require('supertest');
const server = require('./server');

describe('server endpoints', () => {
  describe('POST /api/sentiment-rate', () => {
    it('should return a JSON object with sentiment rate', async () => {
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

    it('should return 422 if no tweet provided', async () => {
      const requestBody = {
        text: ''
      };

      const response = await request(server)
        .post('/api/sentiment-rate')
        .send(requestBody);

      expect(response.status).toBe(422);
      expect(response.body).toEqual({
        message: 'Please provide a tweet you would like to be analyzed.'
      });
    });
  });
});
