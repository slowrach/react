import express from 'express';
import { messageBottle } from './rotas';

const app = express();

app.get('/', messageBottle);

app.listen(3333);

