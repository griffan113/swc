import { Router } from 'express';

import context from '@shared/container/modulesContext';

const router = Router();

context.getRoutes().forEach(route => router.use('/', route));

export default router;
