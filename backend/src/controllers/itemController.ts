import "reflect-metadata";
import { getConnection, createConnection, Connection } from "typeorm";
import { Request, Response } from "express";
import ConnectionConfig from "../config/connection";

class ItemController {
  async index(req: Request, res: Response) {
    try {
      const connection = await createConnection(ConnectionConfig);
      const itemRepository = connection.getRepository("items");

      const allItems = await itemRepository.find();

      const serialized = allItems.map((item) => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://localhost:3333/images/${item.image}`,
        };
      });

      res.json(serialized);

      return connection.close();
    } catch (err) {
      res.send("connection lost");
      console.log(err);
    }
  }
}

export default new ItemController();
