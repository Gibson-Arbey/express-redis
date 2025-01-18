import { Router } from 'express';
import { JsonPlaceholderRoutes } from '../presentation/json-placeholder/json-placeholder.routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/jsonplaceholder',  JsonPlaceholderRoutes.routes  );
    return router;
  }
}
