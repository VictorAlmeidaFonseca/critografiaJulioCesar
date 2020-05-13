const { AnswerApi } = require('./service/api');

AnswerApi.get('')
  .then((response) => {
    const { data } = response
    const { numero_casas } = data
    }
)
