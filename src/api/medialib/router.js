import express from 'express';
import MedialibController from './controller';

const router = express.Router();

router.route('/')
/* GET /api/library - Get list of Media Libraries */
  .get(MedialibController.list)

/* POST /api/library - Create new Media Library */
  .post(MedialibController.create)

/** DELETE /api/library/:libName- Delete Media Library */
  .delete(MedialibController.remove);

router.route('/:_name')
/* GET /api/library/:libName - Get Media Library */
  .get(MedialibController.get)

/* PUT /api/library/:libName - Update Media Library */
  .put(MedialibController.update);

/* Load medialib when API with libId route parameter is hit */
// router.param('libId', MedialibController.get);

export default router;
