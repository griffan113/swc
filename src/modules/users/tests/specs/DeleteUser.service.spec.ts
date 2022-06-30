import AppError from '@shared/errors/AppError';
import { createUserData, mockDeleteUserService } from '@modules/users/tests/mocks';

describe('DeleteUserService', () => {
  it('should be able to delete an user', async () => {
    const { deleteUserService, fakeUserRepository } = mockDeleteUserService();

    const user = await fakeUserRepository.create(createUserData({}));

    const deleteUser = await deleteUserService.execute({ user_id: user.id });

    expect(deleteUser).toHaveProperty('id');
  });

  it('should return an error if the user does not exist', async () => {
    const { deleteUserService } = mockDeleteUserService();

    await expect(deleteUserService.execute({ user_id: 'non-existent-user-id' })).rejects.toBeInstanceOf(AppError);
  });
});
