import { Router } from 'express';

import usersModuleRoutes from '@modules/users/infra/http/routes/';

const routesList: Router[] = [usersModuleRoutes];

const router = Router();

routesList.forEach(route => router.use('/', route));

export default router;
