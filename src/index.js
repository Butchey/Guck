// Initiate Datastores
const Datastore = require('nedb');

db = {};
db.users = new Datastore('db/users.db');
db.movies = new Datastore('db/movies.db');
db.audio = new Datastore('db/audio.db');
db.ebooks = new Datastore('db/ebooks.db');



