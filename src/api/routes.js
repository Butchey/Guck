import express from 'express';

import userRouter from './user/router';
import medialibRouter from './medialib/router';


const router = express.Router();

router.use('/user', userRouter);
router.use('/library', medialibRouter);

export default router;
