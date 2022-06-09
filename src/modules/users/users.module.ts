import Module from '@shared/container/Module';
import usersRouter from '@modules/users/infra/http/routes/';
import UserRepository from '@modules/users/infra/prisma/UserRepository';

@Module({
  router: usersRouter,
  providers: [{ provideAs: 'UserRepository', useClass: UserRepository }],
})
export default class UsersModule {}
