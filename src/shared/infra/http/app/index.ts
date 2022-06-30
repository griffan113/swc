import express, { Express } from 'express';

import setupMiddlewares from '../middlewares';
import setupErrors from '../middlewares/errors';
import setupRoutes from '../routes';

class App {
  public express: Express;

  constructor() {
    this.express = express();

    setupMiddlewares(this.express);
    setupRoutes(this.express);
    setupErrors(this.express);

    this.express.disable('x-powered-by');
  }
}

export default App;
