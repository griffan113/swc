import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';

import SessionsController from '@modules/users/infra/http/controllers/Sessions.controller';

const sessionsController = new SessionsController();

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
