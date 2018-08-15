import Controller from '../controller';
import Movie from './model';

export default class MovieController extends Controller {
  constructor() {
    super(Movie);
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
}
