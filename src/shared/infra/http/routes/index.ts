import express, { Express } from 'express';
import { useExpressServer } from 'routing-controllers';

import modulesContext from '@shared/container/modulesContext';
import frontEndRoutes, { frontEndFolder } from './frontEnd.routes';

function setupRoutes(app: Express): void {
  app.use(express.static(frontEndFolder));
  app.use('/app*', frontEndRoutes);

  app.get('/ping', (req, res): void => {
    res.send({ status: 'active' });
  });

  useExpressServer(app, {
    classTransformer: true,
    routePrefix: '/api',
    validation: true,
    controllers: modulesContext.getControllers(),
  });
}

export default setupRoutes;
