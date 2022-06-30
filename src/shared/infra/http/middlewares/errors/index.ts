import { Express } from 'express';

import { appErrorMiddleware } from './appErrorMiddleware';
import { celebrateErrorMiddleware } from './celebrateErrorMiddleware';
import { defaultErrorMiddleware } from './defaultErrorMiddleware';

function setupErrors(app: Express): void {
  app.use(appErrorMiddleware);
  app.use(celebrateErrorMiddleware);
  app.use(defaultErrorMiddleware);
}

export default setupErrors;
