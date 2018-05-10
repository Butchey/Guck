import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import routes from './api/routes';

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api', routes);

app.listen(config.server.port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server is listening on ${config.server.port}...`);
});

export default app;

