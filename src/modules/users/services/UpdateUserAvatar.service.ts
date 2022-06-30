import { injectable, inject } from 'tsyringe';
import { User } from '@prisma/client';

import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IUpdateUserAvatarServiceRequest {
  user_id: string;
  avatarFileName?: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ user_id, avatarFileName }: IUpdateUserAvatarServiceRequest): Promise<User> {
    if (!avatarFileName) throw new AppError('Avatar não encontrado');

    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const fileName = await this.storageProvider.saveFile(avatarFileName);
    user.avatar = fileName;

    await this.userRepository.update(user);

    return user;
  }
}

export default UpdateUserAvatarService;
