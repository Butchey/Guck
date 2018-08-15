import express from 'express';
import LibraryController from './controller';

const router = express.Router();
const controller = new LibraryController();

router.route('/')
/* GET /api/library - Get list of Media Libraries */
  .get((...args) => controller.list(...args))

/* POST /api/library - Create new Media Library */
  .post((...args) => controller.create(...args))

/** DELETE /api/library/:libName - Delete Media Library */
  .delete((...args) => controller.delete(...args));

router.route('/:libName')
/* GET /api/library/:libraryName - Get Media Library */
  .get((...args) => controller.list(...args))

/* PUT /api/library/:libName - Update Media Library */
  .put((...args) => controller.update(...args))

/* POST /api/library/:libName - Create new Media Library Item */
  .post((...args) => controller.create(...args));

export default router;
