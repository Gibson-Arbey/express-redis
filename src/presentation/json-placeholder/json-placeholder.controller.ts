import { Request, Response } from "express";
import axios from "axios";
import { RedisService } from "../../service/redis.service";

export class JsonPlaceholderController {
  private readonly urlApi = "https://jsonplaceholder.typicode.com";
  private readonly redisClient = RedisService.getInstance().getClient(); // Obtiene el cliente Redis

  public getData = async (req: Request, res: Response) => {
    const cacheKey = "jsonPlaceholder:data"; // Clave única para los datos
    try {
      // Verificar si los datos están en Redis
      const cachedData = await this.redisClient.get(cacheKey);

      if (cachedData) {
        return res.status(200).json({
          source: "cache",
          data: JSON.parse(cachedData),
        });
      }

      // Si no están en la caché, realizar la petición a la API
      const { data } = await axios.get(`${this.urlApi}/posts`);

      // Almacenar los datos en Redis con un TTL de 1 hora
      await this.redisClient.set(cacheKey, JSON.stringify(data), { EX: 3600 });

      return res.status(200).json({
        source: "api",
        data,
      });
    } catch (error) {
      console.error("Error en JsonPlaceHolderController:", error);
      return res.status(500).json({
        message: "Error en JsonPlaceHolderController",
        error: (error as Error).message,
      });
    }
  };
}
