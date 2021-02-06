import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import { router } from './routes';

// creating the express app
const app = express();

// using the middlewares
app.use(bodyParser.json());
app.use(cors({}));

// set the static path to serve client app
app.use(express.static(path.join(__dirname, '../../client/dist')));

// api routes
app.use('/api', router);

// test route
app.use('/ping', (request: Request, response: Response) => {
    return response.status(200).send('OK');
});

module.exports = app;
