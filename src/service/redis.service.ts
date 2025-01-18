import { createClient, RedisClientType } from "redis";

export class RedisService {
  private static instance: RedisService;
  private readonly client: RedisClientType;

  private constructor(url: string) {
    this.client = createClient({ url });

    this.client.on("error", (err: Error) => {
      console.error("Error en el cliente Redis:", err);
    });
  }

  static getInstance(url: string = "redis://127.0.0.1:6379"): RedisService {
    if (!RedisService.instance) {
      RedisService.instance = new RedisService(url);
    }
    return RedisService.instance;
  }

  async connect(): Promise<void> {
    if (!this.client.isOpen) {
      await this.client.connect();
      console.log("Conexión exitosa a Redis");
    }
  }

  getClient(): RedisClientType {
    return this.client;
  }

  async disconnect(): Promise<void> {
    if (this.client.isOpen) {
      await this.client.disconnect();
      console.log("Desconectado de Redis");
    }
  }
}
