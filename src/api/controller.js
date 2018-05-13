export default class Controller {
  constructor(model) {
    this.model = model;
    this.modelName = model.modelName.toLowerCase();
  }

  create(req, res) {
    this.model.create(req.body)
      .then((dbres) => {
        res.json(dbres);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  read(req, res) {
    this.model.get(req.body)
      .then((dbres) => {
        res.json(dbres);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  update(req, res) {
    this.model.findByIdAndUpdate(req.params.id, req.body)
      .then((obj) => {
        res.json(obj);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  delete(req, res) {
    this.model.remove(req.body)
      .then((dbres) => {
        res.json(dbres);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  list(req, res) {
    this.model.find(req.body)
      .then((dbres) => {
        res.json(dbres);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
