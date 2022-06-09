import { Router } from 'express';

import UsersController from '@modules/users/infra/http/controllers/Users.controller';

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.get('/', usersController.index);

export default usersRouter;
