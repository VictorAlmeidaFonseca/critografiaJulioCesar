const path = require('path');
const getJson = require('./getJson');
const saveDecodedJson = require('./saveDecodedJson');
const cryptJson = require('./cryptJson')



const fileJson =  path.resolve(__dirname, './answer.json')


async function getFile() {
    try {
        const waitFile =  await getJson();
        saveDecodedJson(fileJson);
                 
    } catch (err) {
        console.log(err)
    } 
}

getFile();

            // getFile().then( cri =>  cryptJson(fileJson))
