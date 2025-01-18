import { Router } from "express";
import { JsonPlaceholderController } from "./json-placeholder.controller";

export class JsonPlaceholderRoutes {
  static get routes(): Router {
    const router = Router();
    const jsonPlaceholderController = new JsonPlaceholderController();

    router.get("/", (req, res, next) => {
      jsonPlaceholderController.getData(req, res).catch(next);
    });

    return router;
  }
}
