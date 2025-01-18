import { Router } from "express";
import { WorldBankController } from './world-bank.controller';

export class WorldBankRoutes {
  static get routes(): Router {
    const router = Router();
    const worldBankController = new WorldBankController();

    router.get("/", (req, res, next) => {
        worldBankController.getData(req, res).catch(next);
    });

    return router;
  }
}
