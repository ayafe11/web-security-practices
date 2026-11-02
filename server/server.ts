

import express, { Application } from 'express';
import * as fs from 'fs';
import * as https from 'https';
import {readAllComments} from "./read-all-lessons.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean, defaultValue: true },
];

const options = commandLineArgs(optionDefinitions);


// REST APIs

app.route('/api/comments')
    .get(readAllComments);

if (options.secure) {

    const httpsServer = https.createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app);

    // launch an HTTPS Server. Note: this does NOT mean that the application is secure
    httpsServer.listen(9000, () => {
        const addr = httpsServer.address();
        const port = typeof addr === 'object' && addr ? addr.port : 9000;
        console.log(`HTTPS Secure Server running at https://localhost:${port}`);
    });

}
else {

    // launch an HTTP Server
    const httpServer = app.listen(9000, () => {
        const addr = httpServer.address();
        const port = typeof addr === 'object' && addr ? addr.port : 9000;
        console.log(`HTTP Server running at http://localhost:${port}`);
    });

}








