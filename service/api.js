const axios = require('axios');

const token = "f0993428a88dc2cbd13a98fa6257455cca5213ab"

const api = axios.create({

    baseURL: `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`,
    
})

module.exports = api;



