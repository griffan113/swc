import AppError from '@shared/errors/AppError';
import { createUserData, mockAuthenticateUserService } from '../mocks';

describe('AuthenticateUserService', () => {
  it('should be able to auth', async () => {
    const { authenticateUserService, fakeUserRepository } = mockAuthenticateUserService();
    await fakeUserRepository.create(createUserData({}));

    const response = await authenticateUserService.execute({
      email: 'jj@email.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to login with incorrect email', async () => {
    const { authenticateUserService, fakeUserRepository } = mockAuthenticateUserService();
    await fakeUserRepository.create(createUserData({}));

    await expect(
      authenticateUserService.execute({
        email: 'jjj@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to login with incorrect password', async () => {
    const { authenticateUserService, fakeUserRepository } = mockAuthenticateUserService();
    await fakeUserRepository.create(createUserData({}));

    await expect(
      authenticateUserService.execute({
        email: 'jj@email.com',
        password: '1234564',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
