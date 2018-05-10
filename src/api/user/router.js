import express from 'express';
import UserController from './controller';

const router = express.Router();

router.route('/')
/* GET /api/users - Get list of users */
  .get(UserController.list)

/* POST /api/users - Create new user */
  .post(UserController.create)

/* DELETE /api/user/:userId - Delete user */
  .delete(UserController.remove);

router.route('/:_id')
/* GET /api/user/:userId - Get user */
  .get(UserController.get)

/* PUT /api/user/:userId - Update user */
  .put(UserController.update);

/* Load user when API with userId route parameter is hit */
/* router.param('userId', UserController.get); */

export default router;
