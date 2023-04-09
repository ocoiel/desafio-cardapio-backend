import { UserRepository } from "@application/repositories/user.repository";
import { User } from "@domain/entities/User";
import bcrypt from "bcrypt";

interface CreteUserRequest {
  email: string;
  password: string;
}

interface CreteUserResponse {
  user: User;
}
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreteUserRequest): Promise<CreteUserResponse> {
    const { email, password } = request;

    const hashedPassword = await bcrypt.hash(password, 6);

    const user = new User({
      email,
      password: hashedPassword,
      isAdmin: false,
    });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
