import express, { Router } from "express";
import responseTime from "response-time";
import { RedisService } from "../service/redis.service";

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    //* Conectar Redis
    const redisService = RedisService.getInstance();
    await redisService.connect();

    //* Middlewares
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
    this.app.use(responseTime());

    //* Routes
    this.app.use(this.routes);

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
