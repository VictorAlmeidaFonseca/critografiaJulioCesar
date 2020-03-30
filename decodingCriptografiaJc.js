

function decoding(numero_casas, decifrado) {
    
    let solved = '';
    
    for ( let letter = 0; letter < decifrado.length ; letter++) {
        
        let index = decifrado[letter].charCodeAt();
        
        if ( index >= 65 && index <= 77) {
        
            solved += String.fromCharCode(index + numero_casas)
        
        } else if ( index >= 97 &&  index <= 122) {
        
            solved += String.fromCharCode(index - numero_casas)
        
        } else {
        
            solved += decifrado[letter];
        }
    }

    console.log(solved);
    return solved;
    
};

module.exports = decoding;



