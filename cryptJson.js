const crypto = require('crypto');

function cryptoJson ( fieldJson ) {
    
    const json = crypto.createHash('sha1')
                        .update(fieldJson)
                        .digest('hex')
    
                        return json
} 

module.exports = cryptoJson;