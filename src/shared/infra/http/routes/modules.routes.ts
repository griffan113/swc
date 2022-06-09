import { Router } from 'express';

import '@modules/users/users.module';
import context from '@shared/container/modules/context';

const router = Router();

context.getRoutes().forEach(route => router.use('/', route));

export default router;
