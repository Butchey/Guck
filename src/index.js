import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import debug from 'debug';
import config from './config';
import routes from './api/routes';
import PluginHelper from './api/plugin/helper';

// Create global variable __basedir which correspondents to the index.js directory
global.__basedir = __dirname;

mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useMongoClient: true });

// Make mongoose use invisionmedia/debug as debugger
mongoose.set('debug', (name, method, ...args) => {
  switch (method) {
    default:
    case 'find':
    case 'findOne':
    case 'insert':
    case 'update':
    case 'remove':
    case 'createIndex':
      debug('mongoose')(`${name}.${method}(${JSON.stringify(args[0])}, ${JSON.stringify(args[1])})`)
      break;
  }
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

PluginHelper.load('butchey/example-plugin', { app });

app.emit('routes:init', app);
app.use('/api', routes);

debug('App')('initialising');

app.listen(config.server.port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server is listening on ${config.server.port}...`);
});

export default app;

