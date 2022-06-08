import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (_, res) => res.send({ users: true }));

export default usersRouter;
