import { inject, injectable } from 'tsyringe';
import { User } from '@prisma/client';

import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) throw new AppError('User not found', 404);

    return user;
  }
}

export default ShowUserService;
