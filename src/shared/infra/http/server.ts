import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import '@shared/container/';

import App from './app';

const port = process.env.PORT || 3001;

new App().express.listen(port, () => {
  console.log('\x1b[32m', `\n\nš Server running on port ${port}.`);
});
