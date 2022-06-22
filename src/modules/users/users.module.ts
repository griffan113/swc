import usersRouter from '@modules/users/infra/http/routes/';
import UserRepository from '@modules/users/infra/prisma/UserRepository';

import Module from '@shared/decorators/Module';

@Module({
  router: usersRouter,
  providers: [{ provideAs: 'UserRepository', useClass: UserRepository }],
})
export default class UsersModule {}
