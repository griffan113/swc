import { Provider } from './Provider.type';

export interface IModule {
  name?: string;
  controllers?: Array<Function>;
  providers?: Array<Provider>;
}
