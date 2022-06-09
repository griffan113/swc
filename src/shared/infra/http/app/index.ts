import express, { Express } from 'express';

import setupMiddlewares from '../middlewares';
import setupRoutes from '../routes';

class App {
  public express: Express;

  constructor() {
    this.express = express();

    setupRoutes(this.express);
    setupMiddlewares(this.express);

    this.express.disable('x-powered-by');
  }
}

export default App;
