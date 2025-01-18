import { Router } from 'express';
import { JsonPlaceholderRoutes } from '../presentation/json-placeholder/json-placeholder.routes';
import { WorldBankRoutes } from '../presentation/world-bank/world-bank.routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/jsonplaceholder',  JsonPlaceholderRoutes.routes  );
    router.use('/api/worldbank',  WorldBankRoutes.routes  );
    return router;
  }
}
