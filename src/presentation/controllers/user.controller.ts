import { CreateUser } from "@application/use-cases/user/create-user";
import { FastifyRequest, FastifyReply } from "fastify";

import { createUserDTO } from "../dto/create-user.dto";

export class UserController {
  constructor(private createUser: CreateUser) {}

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { email, password } = createUserDTO.parse(request.body);

    const { user } = await this.createUser.execute({ email, password });
  }

  async login() {}
}
