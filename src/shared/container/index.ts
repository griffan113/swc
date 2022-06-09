import { container } from 'tsyringe';
import context from './modules/context';

context.data.forEach(module => {
  module.providers?.forEach(provider => {
    container.registerSingleton(provider.provideAs, provider.useClass);
  });
});
