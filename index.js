const express = require('express');

const app = express();

const routes = require('./routes/routes');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', routes);
