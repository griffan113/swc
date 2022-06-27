import Module from '@shared/decorators/Module';

import usersRouter from '@modules/users/infra/http/routes';
import UserRepository from '@modules/users/infra/prisma/repositories/UserRepository';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

@Module({
  router: usersRouter,
  providers: [
    { provideAs: 'UserRepository', useClass: UserRepository },
    { provideAs: 'HashProvider', useClass: BCryptHashProvider },
  ],
})
export default class UsersModule {}
