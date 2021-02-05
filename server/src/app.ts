import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

// creating the express app
const app = express();

// using the middlewares
app.use(bodyParser.json());

// test route
app.use('/ping', (request: Request, response: Response) => {
    return response.status(200).send('OK');
});

module.exports = app;
