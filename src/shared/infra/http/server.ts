import 'reflect-metadata';
import 'dotenv/config';

import '@shared/container/';

import App from './app';

const port = process.env.PORT || 3001;

new App().express.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
