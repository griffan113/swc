import { Router } from 'express';

import { Provider } from './Provider.type';

export interface IModule {
  name?: string;
  router?: Router;
  providers?: Array<Provider>;
}
