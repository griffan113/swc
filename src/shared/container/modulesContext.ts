import { IModule } from '@shared/types/IModule';

class ModulesContext {
  public data: IModule[] = [];

  public getControllers(): Function[] {
    const controllers = this.data.map(module => module.controllers);

    const filteredControllers = controllers.filter(controller => controller !== undefined) as unknown as Function[];

    return filteredControllers;
  }
}

const context = new ModulesContext();

export default context;
