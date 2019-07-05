import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/users', UserController.getAll);

routes.post('/user', UserController.store);

export default routes;
