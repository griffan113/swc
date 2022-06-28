import Module from '@shared/decorators/Module';

import UserRepository from '@modules/users/infra/prisma/repositories/UserRepository';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';
import UsersController from './infra/http/controllers/Users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    { provideAs: 'UserRepository', useClass: UserRepository },
    { provideAs: 'HashProvider', useClass: BCryptHashProvider },
  ],
})
export default class UsersModule {}
