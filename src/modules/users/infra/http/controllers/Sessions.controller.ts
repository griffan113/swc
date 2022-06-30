import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { plainToInstance } from 'class-transformer';

import AuthenticateUserService from '@modules/users/services/AuthenticateUser.service';
import User from '@modules/users/infra/prisma/models/User';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    return res.json({ user: plainToInstance(User, user), token });
  }
}
