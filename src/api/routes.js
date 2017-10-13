import express from 'express';

import userRouter from './user/router';


const router = express.Router();

router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.use('/user', userRouter);

export default router;