import { Request, Response } from "express";
import { UserResponse, service } from "./service";

class Controller {
  async search(req: Request, res: Response) {
    const response = await service.find();
    return res.send({ response });
  }

  async add(req: Request, res: Response) {
    let response: UserResponse;
    const { name, cpf } = req.body;
    const user = { name, cpf };
    response = await service.create(user);
    if (!response.cpf) {
      return res.status(400).send({ response });
    }
    return res.send({ response });
  }
}

export const controller = new Controller();
