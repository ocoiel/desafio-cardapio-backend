import { UserRepository } from "@application/repositories/user.repository";
import { User } from "@domain/entities/User";
import { UserModel } from "../models/user";

export class MongoUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    const { email, password, isAdmin } = user;
    const userModel = new UserModel({
      email,
      password,
      isAdmin,
    });

    await userModel.save();
  }
  auth(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
