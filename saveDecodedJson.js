const fs = require('fs');
const path = require('path');
const decoding = require('./decodingCriptografiaJc');

const fileJson =  path.resolve(__dirname, './answer.json')


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
            
            console.log('Files was save!')

        }

    });
});




