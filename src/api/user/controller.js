'use strict'

import User from './model';

function get(req, res) {
}

function update(req, res) {
}

function create(req, res, next) {
    console.log(req.body);
    let user = new User(req.body);
    user.save(( err, dbres ) => {
        if (err) {
            res.send(err);
        } else {
            res.json(dbres);
        }
      });
}

function list(req, res) {
    User.find((err, dbres) => {
        if (err) {
            res.send(err);
        } else {
            res.json(dbres);
        }
      });
}

function remove(req, res, next) {
    User.remove( req.body, (err, dbres) => {
        if (err) {
            res.send(err);
        } else {
            res.json(dbres);
        }
      });
}

function login(req, res) {
}

export default { get, update, create, list, remove, login };