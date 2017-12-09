import express from 'express';

import userRouter from './user/router';
import medialibRouter from './medialib/router';


const router = express.Router();

router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.use('/user', userRouter);
router.use('/library', medialibRouter);

export default router;