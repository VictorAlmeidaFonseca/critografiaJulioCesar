const fs = require('fs');
const decoding = require('./decodingCriptografiaJc');

async function saveDecoded (fileJson) {

    try {

    fs.readFile(fileJson, ( err, data ) => {
    
    if (err) {
        console.log(err)
        return
    }
    
    const file = JSON.parse(data)
    const  result = decoding(file.numero_casas, file.cifrado)
    file['decifrado'] = result 

    fs.writeFile(fileJson, JSON.stringify(file), err => {

          if (err) {
                console.log(err)
                return
            
          } else {
           
            console.log('Files was decoded and save!')
            
          }
        });
    });
    
    } catch(err) {

        console.log(err)
    }
};


module.exports = saveDecoded;