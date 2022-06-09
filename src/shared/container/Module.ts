import { IModule } from '@shared/types/IModule';
import context from '@shared/container/modules/context';

export default function Module({ name, providers, router }: IModule) {
  return function (constructor: Function) {
    const moduleName = name || constructor.name;

    const findSameNameModule = context.data.find(module => module.name === moduleName);

    if (findSameNameModule) throw new Error(`Module with name ${moduleName} has already been registered`);

    context.data.forEach(module => {
      const registeredProviders = module.providers?.map(provider => provider.provideAs);

      const passedProviders = providers?.map(provider => provider.provideAs);

      if (!registeredProviders || !passedProviders) return;

      registeredProviders.forEach(registeredProvider => {
        passedProviders.forEach(passedProvider => {
          if (registeredProvider === passedProvider) {
            throw new Error(`The provider ${passedProvider} is already registered in the module ${module.name}`);
          }
        });
      });
    });

    context.data.push({
      name: moduleName,
      providers,
      router,
    });

    console.log(`Module ${moduleName} has been registered`);
  };
}
