import express from 'express';
import UserController from './controller';

const router = express.Router();
const controller = new UserController();

router.route('/')
/* GET /api/users - Get list of users */
  .get((...args) => controller.list(...args))

/* POST /api/users - Create new user */
  .post((...args) => controller.create(...args))

/* DELETE /api/user/:userId - Delete user */
  .delete((...args) => controller.delete(...args));

router.route('/:id')
/* GET /api/user/:userId - Get user */
  .get((...args) => controller.read(...args))

/* PUT /api/user/:userId - Update user */
  .put((...args) => controller.update(...args));

/* Load user when API with userId route parameter is hit */
/* router.param('userId', UserController.get); */

export default router;
