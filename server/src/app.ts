import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import { createConnection } from "typeorm";
import * as env from 'dotenv';
import "reflect-metadata";

import { router } from './routes';

// load the env config
env.config();

createConnection()
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((error) => {
        console.log('Error creating DB connection', error);
        process.exit();
    });


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
