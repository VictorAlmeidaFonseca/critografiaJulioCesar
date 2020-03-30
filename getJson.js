const axios = require('axios');
const fs = require('fs');

const getFileApi = axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=f0993428a88dc2cbd13a98fa6257455cca5213ab')
    
    .then(( response ) => {

        const fileJson = JSON.stringify(response.data)
        
        fs.writeFile("answer.json", fileJson, (err, data) => {
            if (err) console.log(err);
            
            console.log("Successfully get the json file. Written to file.")
        } )
              
    })
    .catch(( error ) => {
        console.log(error);
    })

module.exports = getFileApi