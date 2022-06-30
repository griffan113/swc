import AppError from '@shared/errors/AppError';
import { mockUpdateUserAvatarService, createUserData } from '../mocks';

describe('upadateAvatarService', () => {
  it('should be able to save an avatar', async () => {
    const { fakeUserRepository, updateUserAvatarService } = mockUpdateUserAvatarService();
    const user = await fakeUserRepository.create(createUserData({}));

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFileName: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should be able to replace avatar', async () => {
    const { fakeStorageProvider, fakeUserRepository, updateUserAvatarService } = mockUpdateUserAvatarService();
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeUserRepository.create(createUserData({}));

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFileName: 'avatar.jpg',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFileName: 'avatar2.jpg',
    });

    expect(deleteFile).toBeCalledWith('avatar.jpg');
    expect(user.avatar).toBe('avatar2.jpg');
  });

  it('should not be able to create avatar', async () => {
    const { updateUserAvatarService } = mockUpdateUserAvatarService();
    await expect(
      updateUserAvatarService.execute({
        user_id: 'anyone',
        avatarFileName: 'avatar2.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
