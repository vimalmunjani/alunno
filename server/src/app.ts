import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// creating the express app
const app = express();

// using the middlewares
app.use(bodyParser.json());

// set the static path to serve client app
app.use(express.static(path.join(__dirname, '../../client/dist')));

// test route
app.use('/ping', (request: Request, response: Response) => {
    return response.status(200).send('OK');
});

module.exports = app;
