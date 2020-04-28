const axios = require('axios');

const token = "f0993428a88dc2cbd13a98fa6257455cca5213ab"

const AnswerApi = axios.create({
  baseURL: `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`,

});

const Send = axios.create({
  baseURL: `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${token}`,
  timeout: 1000,
  headers: {
      'Content-Type': 'multipart/form-data'
  }
});

module.exports = { AnswerApi, Send };

