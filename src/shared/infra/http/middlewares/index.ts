import { Express } from 'express';

import { bodyParseMiddleware } from './bodyParser';
import { celebrateMiddleware } from './celebrate';
import { corsMiddleware } from './cors';
import { noCacheMiddleware } from './noCache';

function setupMiddlewares(app: Express): void {
  app.use(corsMiddleware);
  app.use(bodyParseMiddleware);
  app.use(noCacheMiddleware);
  app.use(celebrateMiddleware);
}

export default setupMiddlewares;
