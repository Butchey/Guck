import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './api/routes'

mongoose.connect('mongodb://localhost/guck-server');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', routes);

app.listen(8080, function (err) {
    if (err) {
      throw err
    }
  
    console.log(`server is listening on ${'8888'}...`)
  })

export default app;


