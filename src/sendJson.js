const fs = require('fs')
const { send } = require('./service/api')
const FormData = require('form-data');

const form = new FormData();
const stream = fs.createReadStream('./answer.json');

const formHeaders = form.getHeaders();

form.append('answer', stream)

send.post('', form, {
    headers: {
        ...formHeaders,
      },
})

.then(response => console.log(response))
.catch(error => console.log(error))