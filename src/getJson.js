const { AnswerApi } = require('./service/api');

AnswerApi.get('')
  .then((response) => {
    const { data } = response
    const { numero_casas } = data
    }
)

console.log(numero_casas)
// const { data } = await Api.get('')
// const { numero_casas } = data

// module.exports = 
