import Controller from '../controller';
import Library from './model';

export default class LibraryController extends Controller {
  constructor() {
    super(Library);
  }

  create(req, res) {
    if ('libName' in req.params) {
      this.model.findOne({ name: req.params.libName })
        .then((lib) => {
          const libModule = require(`./modules/${lib.module}/model`).default;
          libModule.create(req.body.push())
            .then((a) => {
              console.log(a);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      const libModule = require(`./modules/${req.body.module}/model`).default;
      this.model.create(req.body)
        .then((dbres) => {
          if ('content' in req.body) {
            libModule.create([
              {
                library: dbres._id,
                filename: 'Fightclub.mkv',
                path: '/path/to/Fightclub',
              },
              {
                library: dbres._id,
                filename: 'American Beauty.mkv',
                path: '/path/to/AmericanBeauty',
              },
              {
                library: dbres._id,
                filename: 'Forrest Gump.mkv',
                path: '/path/to/ForrestGump',
              },
            ]);
          }
          res.json(dbres);
          this.model
            .findOne({ _id: dbres._id })
            .populate('content.item')
            .then((a) => {
              console.log(a);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          res.send(err);
        });
      }
  }
}
