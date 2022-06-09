import { injectable, inject } from 'tsyringe';
import { User } from '@prisma/client';

import IUserRepository from '@modules/users/repositories/IUserRepository';

@injectable()
class IndexUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();

    return users;
  }
}

export default IndexUsersService;
