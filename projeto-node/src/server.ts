import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
   console.log('👩🏽‍💻 server started!');
});

//o "tsc-node-dev" faz a atualização automática (como o nodemon) e faz o 'tsc', que serve para converter o código em javascript para rodar
