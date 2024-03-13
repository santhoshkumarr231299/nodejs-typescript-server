import express, { NextFunction, Request, Response, Router } from 'express';
const router : Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

module.exports = router;