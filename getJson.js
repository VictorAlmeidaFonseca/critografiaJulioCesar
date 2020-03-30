const fs = require('fs');
const saveDecoded = require('./saveDecodedJson');
const api = require('./service/api');

const getFileApi = () => api.get(``)
    
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