import express from 'express';
import MedialibController from './controller';

const router = express.Router();
const controller = new MedialibController();

router.route('/')
/* GET /api/library - Get list of Media Libraries */
  .get((...args) => controller.list(...args))

/* POST /api/library - Create new Media Library */
  .post((...args) => controller.create(...args))

/** DELETE /api/library/:libName- Delete Media Library */
  .delete((...args) => controller.delete(...args));

router.route('/:_name')
/* GET /api/library/:libName - Get Media Library */
  .get((...args) => controller.read(...args))

/* PUT /api/library/:libName - Update Media Library */
  .put((...args) => controller.update(...args));

/* Load medialib when API with libId route parameter is hit */
// router.param('libId', MedialibController.get);

export default router;
