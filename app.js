const path = require('path');
const getJson = require('./getJson');
const saveDecodedJson = require('./saveDecodedJson');

const fileJson =  path.resolve(__dirname, './answer.json')


async function main(fileJson) {
    
    try {
    
        const waitFile =  await getJson();
        const waitDecod = await saveDecodedJson(fileJson);
                       
    
    } catch (err) {
    
        console.log(err)
    
    } 
};

main(fileJson);

        
