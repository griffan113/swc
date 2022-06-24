import { container } from 'tsyringe';

import '@modules/users/users.module';
import context from '@shared/container/modulesContext';

context.data.forEach(module => {
  module.providers?.forEach(provider => {
    container.registerSingleton(provider.provideAs, provider.useClass);
  });
});
