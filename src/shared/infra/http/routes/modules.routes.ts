import { Router } from 'express';

const routesList: Router[] = [];

const router = Router();

routesList.forEach(route => router.use('/', route));

export default router;
