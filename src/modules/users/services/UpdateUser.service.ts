import { inject, injectable } from 'tsyringe';
import { User } from '@prisma/client';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  name?: string;
  email?: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private readonly hashProvider: IHashProvider,
  ) {}

  public async execute({ user_id, name, email, old_password, password }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) throw new AppError('User not found', 404);

    if (email) {
      const verifyIfEmailIsUsed = await this.userRepository.findByEmail(email);

      if (verifyIfEmailIsUsed && verifyIfEmailIsUsed.id !== user.id) throw new AppError('Email already used');
      user.email = email;
    }

    if (name) user.name = name;

    if (password && !old_password) throw new AppError('Old password missing');

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(old_password, user.password);

      if (!checkOldPassword) throw new AppError('Old password does not match');

      user.password = await this.hashProvider.generateHash(password);
    }

    return this.userRepository.update(user);
  }
}

export default UpdateUserService;
