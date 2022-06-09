import { Express } from 'express';

import { bodyParseMiddleware } from './bodyParser';
import { celebrateMiddleware } from './celebrate';
import { corsMiddleware } from './cors';
import { noCacheMiddleware } from './noCache';
import { appErrorMiddleware, celebrateErrorMiddleware, defaultErrorMiddleware } from './errors';

function setupMiddlewares(app: Express): void {
  app.use(corsMiddleware);
  app.use(bodyParseMiddleware);
  app.use(noCacheMiddleware);
  app.use(celebrateMiddleware);
  app.use(appErrorMiddleware);
  app.use(defaultErrorMiddleware);
  app.use(celebrateErrorMiddleware);
}

export default setupMiddlewares;
