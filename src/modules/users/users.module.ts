import Module from '@shared/container/Module';
import usersRouter from '@modules/users/infra/http/routes/';

@Module({
  router: usersRouter,
})
export default class UsersModule {}
