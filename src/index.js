// Initiate Datastores
//const config = require('/config');

import User from './model/user/index';

var user = new User;
user.create({ name: 'Butchey', created: new Date(), password: 'testpass123', mail: 'privat@butchey.me' });
/*
db.movies = new Datastore('db/movies.db');
db.audio = new Datastore('db/audio.db');
db.ebooks = new Datastore('db/ebooks.db');
*/



