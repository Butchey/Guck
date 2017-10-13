'use strict'

const Datastore = require('nedb');
const Bcrypt = require('bcrypt');


var db = new Datastore({ filename: 'db/users.db', autoload: true });


function get(req, res) {
}

function update(req, res) {
}

function create(req, res, next) {
    req.query.password = Bcrypt.hashSync(req.query.password, Bcrypt.genSaltSync(10));
    // Add Validation by Schema
    db.insert( req.query, ( err, doc ) => {
        res.json(doc);
    });
}

function list(req, res) {
    db.find(req.query, ( err, docs ) => {
        console.log(docs);
        res.json(docs);
    });
}

function remove(req, res, next) {
    db.remove(req.query, { multi: true }, ( err, numRemoved ) => {
        res.json(numRemoved);
    });
}

function login(req, res) {
}

export default {get, update, create, list, remove, login};