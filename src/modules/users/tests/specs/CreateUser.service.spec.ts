import AppError from '@shared/errors/AppError';
import { createUserData, mockCreateUserService } from '../mocks';

describe('CreateUserService', () => {
  it('should be able to create a new user', async () => {
    const createUserService = mockCreateUserService();
    const user = await createUserService.execute(createUserData({}));

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    const createUserService = mockCreateUserService();
    await createUserService.execute(createUserData({}));

    await expect(createUserService.execute(createUserData({}))).rejects.toBeInstanceOf(AppError);
  });
});
