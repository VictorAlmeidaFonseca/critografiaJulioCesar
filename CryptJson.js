const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const fileJson =  path.resolve(__dirname, './answer.json')


function cryptoJson ( fieldJson ) {
    
    const json = crypto.createHash('sha1')
                        .update(fieldJson)
                        .digest('hex')
    
                        return json

} 



fs.readFile(fileJson, (err, data) => {
    
    if (err) {
    
        console.log(err)
        return
    
    } else {

       const file = JSON.parse(data)
       const secret = cryptoJson(file.decifrado)
       file['resumo_criptografico'] = secret

       fs.writeFile(fileJson, JSON.stringify(file), err => {

            if (err) {
                
                console.log(err)
                return
        
             } else {
            
                console.log('Files was save!')

             }
        })
    }
});