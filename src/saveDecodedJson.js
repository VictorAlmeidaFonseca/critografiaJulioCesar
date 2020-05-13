const fs = require('fs');
const decoding = require('./decodingCriptografiaJc');
const cryptoJson = require('./cryptJson');

async function saveDecoded (fileJson) {
  try {
    fs.readFile(fileJson, ( err, data ) => {
      if (err) {
      console.log(err)
        return
    }
    
    const file = JSON.parse(data)
    const result = decoding(file.numero_casas, file.cifrado)
    const secret = cryptoJson(result)
        
    file['decifrado'] = result 
    file['resumo_criptografico'] = secret

    fs.writeFile(fileJson, JSON.stringify(file), err => {
      if (err) {
        console.log(err)
          return
    } else {
      console.log('Files was decoded, encrypted and save!')
    }});
   });    
 } catch (err) {
   console.log(err)
  }
};

module.exports = saveDecoded;
