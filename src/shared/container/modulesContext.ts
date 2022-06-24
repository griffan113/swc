import { Router } from 'express';

import { IModule } from '@shared/types/IModule';

class ModulesContext {
  public data: IModule[] = [];

  public getRoutes(): Router[] {
    const routes = this.data.map(module => module.router);

    const filteredRoutes = routes.filter(route => route !== undefined) as Router[];

    return filteredRoutes;
  }
}

const context = new ModulesContext();

export default context;
