import express, { Express } from 'express';

import frontEndRoutes, { frontEndFolder } from './frontEnd.routes';
import modulesRoutes from './modules.routes';

function setupRoutes(app: Express): void {
  app.use(express.static(frontEndFolder));
  app.use('/app*', frontEndRoutes);

  app.use('/api', modulesRoutes);

  app.get('/ping', (req, res): void => {
    res.send({ status: 'active' });
  });
}

export default setupRoutes;
