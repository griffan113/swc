import { Router } from 'express';

import context from '@shared/container/modules/context';

const router = Router();

context.getRoutes().forEach(route => router.use('/', route));

export default router;
