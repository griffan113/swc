import { inject, injectable } from 'tsyringe';
import { User } from '@prisma/client';

import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const findUser = await this.userRepository.findById(user_id);

    if (!findUser) throw new AppError('User not found', 404);

    const deleteUser = await this.userRepository.delete(findUser.id);

    return deleteUser;
  }
}

export default CreateUserService;
