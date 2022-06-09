import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IndexUsersService from '@modules/users/services/IndexUsers.service';

export default class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const indexUsersService = container.resolve(IndexUsersService);

    const users = await indexUsersService.execute();

    return res.json(users);
  }
}
