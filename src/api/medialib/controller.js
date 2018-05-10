import Medialib from './model';

function get(req, res) {
}

function update(req, res) {
}

function create(req, res, next) {
  const lib = new Medialib(req.body);
  const Module = require('./modules/' + req.body.module + '/model');
  lib.content = new Module();
  lib.save((err, dbres) => {
    if (err) {
      res.send(err);
    } else {
      res.json(dbres);
    }
  });
}

function list(req, res) {
  Medialib.find((err, dbres) => {
    if (err) {
      res.send(err);
    } else {
      res.json(dbres);
    }
  });
}

function remove(req, res, next) {
  Medialib.remove(req.body, (err, dbres) => {
    if (err) {
      res.send(err);
    } else {
      res.json(dbres);
    }
  });
}

export default {
  get,
  update,
  create,
  list,
  remove,
};
