import { Router } from 'express';

import modulesContext from '@shared/container/modulesContext';

const router = Router();

modulesContext.getRoutes().forEach(route => router.use('/', route));

export default router;
