import express from 'express';
import routes from './routes';
import database from './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
   console.log('👩🏽‍💻 server started!');
});

database.initialize();

//o "tsc-node-dev" faz a atualização automática (como o nodemon) e faz o 'tsc', que serve para converter o código em javascript para rodar
