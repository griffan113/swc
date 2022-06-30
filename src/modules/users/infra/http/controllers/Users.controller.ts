import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { plainToInstance } from 'class-transformer';

import User from '@modules/users/infra/prisma/models/User';
import CreateUserService from '@modules/users/services/CreateUser.service';
import ShowUserService from '@modules/users/services/ShowUser.service';
import IndexUsersService from '@modules/users/services/IndexUsers.service';
import UpdateUserService from '@modules/users/services/UpdateUser.service';
import DeleteUserService from '@modules/users/services/DeleteUser.service';

export default class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const indexUsersService = container.resolve(IndexUsersService);

    const users = await indexUsersService.execute();

    return res.json(plainToInstance(User, users));
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;

    const showUserService = container.resolve(ShowUserService);

    const user = await showUserService.execute({ user_id });

    return res.json(plainToInstance(User, user));
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return res.json(plainToInstance(User, user));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;
    const { email, name, old_password, password } = req.body;

    const updateUserService = container.resolve(UpdateUserService);

    const updateUser = await updateUserService.execute({
      user_id,
      email,
      name,
      old_password,
      password,
    });

    return res.json(plainToInstance(User, updateUser));
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;

    const deleteUserService = container.resolve(DeleteUserService);

    const deleteUser = await deleteUserService.execute({ user_id });

    return res.json(plainToInstance(User, deleteUser));
  }
}
