import { IModule } from '@shared/types/IModule';
import modulesContext from '@shared/container/modulesContext';

export default function Module({ name, providers, router }: IModule) {
  return function (constructor: Function) {
    const moduleName = name || constructor.name;

    const findSameNameModule = modulesContext.data.find(module => module.name === moduleName);

    if (findSameNameModule) throw new Error(`Module with name ${moduleName} has already been registered.`);

    if (providers)
      for (let i = 0; i < providers.length; i++)
        for (let j = 0; j < providers.length; j++)
          if (i !== j)
            if (providers[i].provideAs === providers[j].provideAs)
              throw new Error(`Provider ${providers[i].provideAs} has already been registered within module ${moduleName}.`);

    modulesContext.data.forEach(module => {
      const registeredProviders = module.providers?.map(provider => provider.provideAs);

      const passedProviders = providers?.map(provider => provider.provideAs);

      if (!registeredProviders || !passedProviders) return;

      registeredProviders.forEach(registeredProvider => {
        passedProviders.forEach(passedProvider => {
          if (registeredProvider === passedProvider) {
            throw new Error(`The provider ${passedProvider} is already registered in the module ${module.name}.`);
          }
        });
      });
    });

    modulesContext.data.push({
      name: moduleName,
      providers,
      router,
    });

    console.log('\x1b[32m', `Module ${moduleName} has been registered.`);
  };
}
